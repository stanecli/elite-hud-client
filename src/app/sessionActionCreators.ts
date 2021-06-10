import * as actions from "./sessionActions";
import { ConnectAction, DisconnectAction } from "./sessionActionTypes";

export const connect = (): ConnectAction => ({
    type: actions.CONNECT,
});

export const disconnect = (): DisconnectAction => ({
    type: actions.DISCONNECT,
});
