import { combineReducers } from "redux";
import { hudReducer } from "./hudReducer";
import { sessionReducer } from "./sessionReducer";

export const rootReducer = combineReducers({
    session: sessionReducer,
    hud: hudReducer,
});
