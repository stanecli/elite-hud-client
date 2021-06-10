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

export interface LandingGearChangedAction {
    type: typeof EVT_LANDING_GEAR;
    data: boolean;
}

export interface NightVisionChangedAction {
    type: typeof EVT_NIGHTVISION;
    data: boolean;
}

export enum KeyPressMode {
    Simultaneous,
    Sequential,
}

export interface PressKeysAction {
    type: typeof ACT_PRESS_KEYS;
    keys: string[];
    mode: KeyPressMode;
}

export type HudActionTypes =
    | MessageAction
    | LoadGameAction
    | PressKeysAction
    | LandingGearChangedAction
    | NightVisionChangedAction;
