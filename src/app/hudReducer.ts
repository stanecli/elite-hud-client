import { EVT_LANDING_GEAR, EVT_LOAD_GAME, EVT_MESSAGE, EVT_NIGHTVISION } from "./hudActions";
import { HudActionTypes } from "./hudActionTypes";
import { HudState } from "./hudStateTypes";

const initialState: HudState = {
    messages: [],
    ship: {
        headlights: false,
        landingGear: false,
        nightVision: false,
    },
};

export function hudReducer(state = initialState, action: HudActionTypes): HudState {
    switch (action.type) {
        case EVT_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message],
            };
        case EVT_LOAD_GAME:
            return {
                ...state,
                status: action.data,
            };
        case EVT_LANDING_GEAR:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    landingGear: action.data,
                },
            };
        case EVT_NIGHTVISION:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    nightVision: action.data,
                },
            };
        default:
            return state;
    }
}
