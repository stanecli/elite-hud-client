import { ACT_PRESS_KEYS, EVT_LANDING_GEAR, EVT_NIGHTVISION } from "./hudActions";
import { KeyPressMode, LandingGearChangedAction, NightVisionChangedAction, PressKeysAction } from "./hudActionTypes";
import { store } from "./store";

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
    store.dispatch<NightVisionChangedAction>({
        type: EVT_NIGHTVISION,
        data: !store.getState().hud.ship.nightVision,
    });
};
