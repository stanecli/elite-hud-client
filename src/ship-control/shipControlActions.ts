import {
    ACT_PRESS_KEYS,
    EVT_CARGO_SCOOP,
    EVT_HARDPOINTS,
    EVT_HEADLIGHTS,
    EVT_LANDING_GEAR,
    EVT_NIGHTVISION,
    EVT_SILENT_RUNNING,
} from "../app/hudActions";
import {
    CargoScoopChangedAction,
    HardpointsChangedAction,
    HeadlightsChangedAction,
    KeyPressMode,
    LandingGearChangedAction,
    NightVisionChangedAction,
    PressKeysAction,
    SilentRunningChangedAction,
} from "../app/hudActionTypes";
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
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["Delete"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<SilentRunningChangedAction>({
        type: EVT_SILENT_RUNNING,
        data: !store.getState().hud.ship.silentRunning,
    });
};
