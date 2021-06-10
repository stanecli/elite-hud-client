import * as actions from "./sessionActions";

export interface ConnectAction {
    type: typeof actions.CONNECT;
}

export interface DisconnectAction {
    type: typeof actions.DISCONNECT;
}
export type SessionAcitonTypes = ConnectAction | DisconnectAction;
