import { ACT_PRESS_KEYS, EVT_DROPPING_OUT } from "../app/hudActions";
import { PressKeysAction, KeyPressMode, DroppingChangedAction } from "../app/hudActionTypes";
import { FSDStatus } from "../app/hudStateTypes";
import { store } from "../app/store";

export const emergencyDrop = () => {
    if (store.getState().hud.ship.fsdStatus !== FSDStatus.SuperCruise) {
        return;
    }
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["J", "J"],
        mode: KeyPressMode.Sequential,
    });
    store.dispatch<DroppingChangedAction>({
        type: EVT_DROPPING_OUT,
        data: true,
    });
};

export const targetNextSystemInRoute = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["OemPeriod"],
        mode: KeyPressMode.Sequential,
    });
};
