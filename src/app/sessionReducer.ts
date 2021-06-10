import * as actions from "./sessionActions";
import { SessionAcitonTypes } from "./sessionActionTypes";
import { SessionState } from "./sessionStateTypes";

const initialState: SessionState = {
    connected: false,
};

export function sessionReducer(
    state = initialState,
    action: SessionAcitonTypes
): SessionState {
    switch (action.type) {
        case actions.CONNECT:
            return {
                ...state,
                connected: true,
            };
        case actions.DISCONNECT:
            return {
                ...initialState,
                connected: true,
            };
        default:
            return state;
    }
}
