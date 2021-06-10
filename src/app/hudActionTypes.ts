import { ACT_PRESS_KEYS, EVT_LANDING_GEAR, EVT_LOAD_GAME, EVT_MESSAGE, EVT_NIGHTVISION } from "./hudActions";
import { LoadGameData } from "./hudDataTypes";

export interface MessageAction {
    type: typeof EVT_MESSAGE;
    message: string;
}

export interface LoadGameAction {
    type: typeof EVT_LOAD_GAME;
    data: LoadGameData;
}

export interface LandingGearAction {
    type: typeof EVT_LANDING_GEAR;
    data: boolean;
}

export interface NightVisionAction {
    type: typeof EVT_NIGHTVISION;
    data: boolean;
}

export interface PressKeysAction {
    type: typeof ACT_PRESS_KEYS;
    keys: string[];
}

export type HudActionTypes = MessageAction | LoadGameAction | LandingGearAction | PressKeysAction | NightVisionAction;
