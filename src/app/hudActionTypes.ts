import {
    ACT_PRESS_KEYS,
    EVT_CARGO_SCOOP,
    EVT_HARDPOINTS,
    EVT_HEADLIGHTS,
    EVT_LANDING_GEAR,
    EVT_LOAD_GAME,
    EVT_NIGHTVISION,
    EVT_SILENT_RUNNING,
} from "./hudActions";
import { LoadGameData } from "./hudStateTypes";

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

export interface HardpointsChangedAction {
    type: typeof EVT_HARDPOINTS;
    data: boolean;
}

export interface HeadlightsChangedAction {
    type: typeof EVT_HEADLIGHTS;
    data: boolean;
}

export interface CargoScoopChangedAction {
    type: typeof EVT_CARGO_SCOOP;
    data: boolean;
}

export interface SilentRunningChangedAction {
    type: typeof EVT_SILENT_RUNNING;
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
    | LoadGameAction
    | PressKeysAction
    | LandingGearChangedAction
    | NightVisionChangedAction
    | HeadlightsChangedAction
    | CargoScoopChangedAction
    | SilentRunningChangedAction
    | HardpointsChangedAction;
