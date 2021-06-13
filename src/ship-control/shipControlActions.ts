import {
    ACT_PRESS_KEYS,
    EVT_CARGO_SCOOP,
    EVT_HARDPOINTS,
    EVT_HEADLIGHTS,
    EVT_HUD,
    EVT_LANDING_GEAR,
    EVT_NIGHTVISION,
    EVT_ORBIT_LINES,
    EVT_ROTATIONAL_CORRECTION,
    EVT_SHIPFLAGS,
} from "../app/hudActions";
import {
    CargoScoopChangedAction,
    HardpointsChangedAction,
    HeadlightsChangedAction,
    HUDChangedAction,
    KeyPressMode,
    LandingGearChangedAction,
    NightVisionChangedAction,
    OrbitLinesChangedAction,
    PressKeysAction,
    RotationalCorrectionChangedAction,
    ShipFlagsChanged,
} from "../app/hudActionTypes";
import { ShipFlags } from "../app/hudStateTypes";
import { store } from "../app/store";

export const toggleLandingGear = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["L"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<LandingGearChangedAction>({
        type: EVT_LANDING_GEAR,
        data: !store.getState().hud.ship.landingGear,
    });
};

export const toggleNightVision = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["LControlKey", "Insert"],
        mode: KeyPressMode.Simultaneous,
    });
    store.dispatch<NightVisionChangedAction>({
        type: EVT_NIGHTVISION,
        data: !store.getState().hud.ship.nightVision,
    });
};

export const toggleCargoScoop = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["Home"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<CargoScoopChangedAction>({
        type: EVT_CARGO_SCOOP,
        data: !store.getState().hud.ship.cargoSoop,
    });
};

export const toggleHardpoints = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["U"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<HardpointsChangedAction>({
        type: EVT_HARDPOINTS,
        data: !store.getState().hud.ship.hardpoints,
    });
};

export const toggleHeadlights = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["Insert"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<HeadlightsChangedAction>({
        type: EVT_HEADLIGHTS,
        data: !store.getState().hud.ship.headlights,
    });
};

export const toggleSilentRunning = () => {
    const state = (store.getState().hud.shipFlags || 0) & ShipFlags.SilentRunning;
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["Delete"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<ShipFlagsChanged>({
        type: EVT_SHIPFLAGS,
        data:
            state > 0
                ? (store.getState().hud.shipFlags || 0) & ~ShipFlags.SilentRunning
                : (store.getState().hud.shipFlags || 0) | ShipFlags.SilentRunning,
    });
};

export const toggleRotationCorrection = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["OemCloseBrackets"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<RotationalCorrectionChangedAction>({
        type: EVT_ROTATIONAL_CORRECTION,
        data: !store.getState().hud.ship.rotationalCorrection,
    });
};

export const toggleOrbitLines = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["Oemplus"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<OrbitLinesChangedAction>({
        type: EVT_ORBIT_LINES,
        data: !store.getState().hud.ship.orbitLines,
    });
};

export const toggleHud = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["LControlKey", "LMenu", "G"],
        mode: KeyPressMode.Simultaneous,
    });
    store.dispatch<HUDChangedAction>({
        type: EVT_HUD,
        data: !store.getState().hud.ship.hud,
    });
};
