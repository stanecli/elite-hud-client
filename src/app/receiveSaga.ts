import { eventChannel, EventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { HudActionTypes } from "./hudActionTypes";

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
            emit(JSON.parse(evt.data));
        };
        return () => {
            // cleanup
        };
    });
}
