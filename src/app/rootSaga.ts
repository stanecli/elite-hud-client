import { call, fork } from "redux-saga/effects";
import { receiveSaga } from "./receiveSaga";
import { sendSaga } from "./sendSaga";
import { connect } from "./sessionSagas";

export function* rootSaga() {
    const socket: WebSocket | undefined = yield call(connect);
    if (socket) {
        yield fork(receiveSaga, socket);
        yield fork(sendSaga, socket);
    }
}
