import { EventChannel, eventChannel } from "redux-saga";
import { call, cancel, fork, put, take } from "redux-saga/effects";
import { HudActionTypes } from "./hudActionTypes";
import { sendSaga } from "./sendSaga";
import * as sessionActionCretors from "./sessionActionCreators";
import { CONNECT } from "./sessionActions";
import { ConnectAction, DisconnectAction } from "./sessionActionTypes";

export function* rootSaga() {
    while (true) {
        const socket: WebSocket | undefined = yield call(connect);
        if (socket) {
            const receiveTask = yield fork(receiveSaga, socket);
            const sendTask = yield fork(sendSaga, socket);
            yield call(watchDisconnect, socket);
            yield cancel(receiveTask);
            yield cancel(sendTask);
        }
    }
}

function* watchDisconnect(socket: WebSocket) {
    const channel: EventChannel<DisconnectAction> = yield call(subscribeToDisconnectEvent, socket);
    const action: DisconnectAction = yield take(channel);
    channel.close();
    yield put(action);
}

function subscribeToDisconnectEvent(socket: WebSocket) {
    return eventChannel((emit) => {
        // when the connection is closed, this method is called
        socket.onclose = function () {
            emit(sessionActionCretors.disconnect());
            console.log("disconnected");
        };

        return () => {
            // cleanup
        };
    });
}

function* connect() {
    while (true) {
        // create a new websocket and connect
        const socket = new WebSocket(`ws://${window.location.hostname}:8181/`);
        const connectChannel: EventChannel<ConnectAction | DisconnectAction> = yield call(
            subscribeToConnectEvents,
            socket
        );
        const action: ConnectAction | DisconnectAction = yield take(connectChannel);
        connectChannel.close();
        yield put(action);
        if (action.type === CONNECT) {
            return socket;
        }
    }
}

function subscribeToConnectEvents(socket: WebSocket) {
    return eventChannel((emit) => {
        // when the connection is established, this method is called
        socket.onopen = function () {
            emit(sessionActionCretors.connect());
        };

        // when the connection is closed, this method is called
        socket.onclose = function () {
            emit(sessionActionCretors.disconnect());
            console.log("disconnected");
        };

        return () => {
            // cleanup
        };
    });
}

function* receiveSaga(socket: WebSocket) {
    const channel: EventChannel<HudActionTypes> = yield call(HudChannel, socket);
    while (true) {
        const action: HudActionTypes = yield take(channel);
        yield put(action);
    }
}

function HudChannel(socket: WebSocket) {
    return eventChannel((emit) => {
        socket.onmessage = (evt) => {
            const data = JSON.parse(evt.data);
            console.log(data);
            emit(data);
        };
        return () => {
            // cleanup
        };
    });
}
