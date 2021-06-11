import { ACT_PRESS_KEYS, EVT_GUI_FOCUS } from "../app/hudActions";
import { GuiFocusChangedAction, KeyPressMode, PressKeysAction } from "../app/hudActionTypes";
import { ShipGuiFocus } from "../app/hudStateTypes";
import { store } from "../app/store";

export const toggleGalaxyMap = () => {
    const active = store.getState().hud.ship.guiFocus === ShipGuiFocus.GalaxyMap;
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["M"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<GuiFocusChangedAction>({
        type: EVT_GUI_FOCUS,
        data: active ? ShipGuiFocus.NoFocus : ShipGuiFocus.GalaxyMap,
    });
};

export const toggleSystemMap = () => {
    const active = store.getState().hud.ship.guiFocus === ShipGuiFocus.SystemMap;
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["Oemcomma"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<GuiFocusChangedAction>({
        type: EVT_GUI_FOCUS,
        data: active ? ShipGuiFocus.NoFocus : ShipGuiFocus.SystemMap,
    });
};

export const toggleFSS = () => {
    const active = store.getState().hud.ship.guiFocus === ShipGuiFocus.FssMode;
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["F2"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<GuiFocusChangedAction>({
        type: EVT_GUI_FOCUS,
        data: active ? ShipGuiFocus.NoFocus : ShipGuiFocus.FssMode,
    });
};
