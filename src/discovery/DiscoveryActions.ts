import { ACT_PRESS_KEYS } from "../app/hudActions";
import { KeyPressMode, PressKeysAction } from "../app/hudActionTypes";
import { store } from "../app/store";

export const toggleGalaxyMap = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["M"],
        mode: KeyPressMode.Sequential,
    });
};

export const toggleSystemMap = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["Oemcomma"],
        mode: KeyPressMode.Sequential,
    });
};

export const toggleFSS = () => {
    store.dispatch<PressKeysAction>({
        type: ACT_PRESS_KEYS,
        keys: ["F2"],
        mode: KeyPressMode.Sequential,
    });
};
