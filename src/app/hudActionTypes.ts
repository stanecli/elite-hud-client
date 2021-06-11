import {
    ACT_PRESS_KEYS,
    EVT_CARGO_SCOOP,
    EVT_GUI_FOCUS,
    EVT_HARDPOINTS,
    EVT_HEADLIGHTS,
    EVT_HUD,
    EVT_LANDING_GEAR,
    EVT_LOAD_GAME,
    EVT_NIGHTVISION,
    EVT_ORBIT_LINES,
    EVT_ROTATIONAL_CORRECTION,
    EVT_SILENT_RUNNING,
} from "./hudActions";
import { LoadGameData, ShipGuiFocus } from "./hudStateTypes";

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

export interface OrbitLinesChangedAction {
    type: typeof EVT_ORBIT_LINES;
    data: boolean;
}

export interface HUDChangedAction {
    type: typeof EVT_HUD;
    data: boolean;
}

export interface RotationalCorrectionChangedAction {
    type: typeof EVT_ROTATIONAL_CORRECTION;
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

export interface GuiFocusChangedAction {
    type: typeof EVT_GUI_FOCUS;
    data: ShipGuiFocus;
}

export type HudActionTypes =
    | LoadGameAction
    | PressKeysAction
    | LandingGearChangedAction
    | NightVisionChangedAction
    | HeadlightsChangedAction
    | CargoScoopChangedAction
    | SilentRunningChangedAction
    | OrbitLinesChangedAction
    | RotationalCorrectionChangedAction
    | HUDChangedAction
    | GuiFocusChangedAction
    | HardpointsChangedAction;
