import {
    ACT_PRESS_KEYS,
    EVT_ANALYSIS_MODE,
    EVT_CARGO,
    EVT_CARGO_SCOOP,
    EVT_DROPPING_OUT,
    EVT_FSD_CHARGING,
    EVT_FSD_COOLDOWN,
    EVT_GUI_FOCUS,
    EVT_HARDPOINTS,
    EVT_HEADLIGHTS,
    EVT_HUD,
    EVT_HYPERJUMP,
    EVT_HYPERJUMP_CHARGING,
    EVT_INITIALIZE,
    EVT_LANDING_GEAR,
    EVT_LOADOUT,
    EVT_MASS_LOCK,
    EVT_NIGHTVISION,
    EVT_ORBIT_LINES,
    EVT_ROTATIONAL_CORRECTION,
    EVT_SHIPFLAGS,
    EVT_SILENT_RUNNING,
    EVT_SUPERCRUISE,
    EVT_SUPERCRUISE_CHARGING,
} from "./hudActions";
import { CargoState, InitializeData, LoadoutSate, ShipFlags, ShipGuiFocus } from "./hudStateTypes";

export interface InitializeAction {
    type: typeof EVT_INITIALIZE;
    data: InitializeData;
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

export interface IsCharingChanged {
    type: typeof EVT_FSD_CHARGING;
    data: boolean;
}
export interface OnCoolDownChanged {
    type: typeof EVT_FSD_COOLDOWN;
    data: boolean;
}
export interface IsJumpingChanged {
    type: typeof EVT_HYPERJUMP;
    data: boolean;
}
export interface InSuperCruiseChanged {
    type: typeof EVT_SUPERCRUISE;
    data: boolean;
}

export interface LoadoutAction {
    type: typeof EVT_LOADOUT;
    data: LoadoutSate;
}

export interface MassLockChangedAction {
    type: typeof EVT_MASS_LOCK;
    data: boolean;
}

export interface DroppingChangedAction {
    type: typeof EVT_DROPPING_OUT;
    data: boolean;
}

export interface HyperJumpCharingChangedAction {
    type: typeof EVT_HYPERJUMP_CHARGING;
    data: boolean;
}

export interface SuperCruiseChargingChangedAction {
    type: typeof EVT_SUPERCRUISE_CHARGING;
    data: boolean;
}

export interface CargoChangedAction {
    type: typeof EVT_CARGO;
    data: CargoState;
}

export interface ShipFlagsChanged {
    type: typeof EVT_SHIPFLAGS;
    data: ShipFlags;
}

export interface AnalysisModeChanged {
    type: typeof EVT_ANALYSIS_MODE;
    data: boolean;
}

export type HudActionTypes =
    | InitializeAction
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
    | IsCharingChanged
    | OnCoolDownChanged
    | IsJumpingChanged
    | InSuperCruiseChanged
    | HardpointsChangedAction
    | LoadoutAction
    | DroppingChangedAction
    | SuperCruiseChargingChangedAction
    | HyperJumpCharingChangedAction
    | MassLockChangedAction
    | CargoChangedAction
    | AnalysisModeChanged
    | ShipFlagsChanged;
