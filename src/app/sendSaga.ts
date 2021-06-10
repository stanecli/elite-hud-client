import { take } from "redux-saga/effects";
import { ACT_PRESS_KEYS } from "./hudActions";
import { PressKeysAction } from "./hudActionTypes";

export function* sendSaga(socket: WebSocket) {
    while (true) {
        const action: PressKeysAction = yield take(ACT_PRESS_KEYS);
        socket.send(
            JSON.stringify({
                type: "PRESS_KEYS",
                keys: action.keys,
            })
        );
    }
}
