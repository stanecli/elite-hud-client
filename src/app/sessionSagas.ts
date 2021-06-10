import { eventChannel, EventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import * as actionCreators from "./sessionActionCreators";
import { CONNECT } from "./sessionActions";
import { ConnectAction, DisconnectAction } from "./sessionActionTypes";

export function* connect() {
    // create a new websocket and connect
    const socket = new WebSocket("ws://192.168.0.20:8181/");
    const connectChannel: EventChannel<ConnectAction | DisconnectAction> = yield call(subscribeToConnectEvents, socket);
    try {
        const action: ConnectAction | DisconnectAction = yield take(connectChannel);
        yield put(action);
        if (action.type === CONNECT) {
            return socket;
        }
    } finally {
        connectChannel.close();
    }
}

function subscribeToConnectEvents(socket: WebSocket) {
    return eventChannel((emit) => {
        // when the connection is established, this method is called
        socket.onopen = function () {
            // setSocket(socket);
            emit(actionCreators.connect());
        };

        // when the connection is closed, this method is called
        // socket.onclose = function () {};

        return () => {
            // cleanup
        };
    });
}
