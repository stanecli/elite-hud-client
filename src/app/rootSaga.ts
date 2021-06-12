import { EventChannel, eventChannel } from "redux-saga";
import { call, fork, put, take } from "redux-saga/effects";
import { HudActionTypes } from "./hudActionTypes";
import { sendSaga } from "./sendSaga";
import { connect } from "./sessionSagas";

export function* rootSaga() {
    const socket: WebSocket | undefined = yield call(connect);
    if (socket) {
        yield fork(receiveSaga, socket);
        yield fork(sendSaga, socket);
    }
}

export function* receiveSaga(socket: WebSocket) {
    const channel: EventChannel<HudActionTypes> = yield call(HudChannel, socket);
    while (true) {
        const action: HudActionTypes = yield take(channel);
        yield put(action);
    }
}

function HudChannel(socket: WebSocket) {
    return eventChannel((emit) => {
        socket.onmessage = (evt) => {
            console.log(evt.data);
            emit(JSON.parse(evt.data));
        };
        return () => {
            // cleanup
        };
    });
}
