import {
    EVT_CARGO_SCOOP,
    EVT_HARDPOINTS,
    EVT_HEADLIGHTS,
    EVT_LANDING_GEAR,
    EVT_LOAD_GAME,
    EVT_NIGHTVISION,
    EVT_SILENT_RUNNING,
} from "./hudActions";
import { HudActionTypes } from "./hudActionTypes";
import { HudState } from "./hudStateTypes";

const initialState: HudState = {
    ship: {
        headlights: false,
        landingGear: false,
        nightVision: false,
        cargoSoop: false,
        hardpoints: false,
        hud: false,
        orbitLines: false,
        rotationalCorrection: false,
        silentRunning: false,
    },
};

export function hudReducer(state = initialState, action: HudActionTypes): HudState {
    switch (action.type) {
        case EVT_LOAD_GAME:
            return {
                ...state,
                status: {
                    commander: action.data.commander,
                    credits: action.data.credits,
                    fuelCapacity: action.data.fuelCapacity,
                    fuelLevel: action.data.fuelLevel,
                    insurance: action.data.loan,
                    shipName: action.data.shipName,
                    shipType: action.data.ship,
                },
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
        case EVT_SILENT_RUNNING:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    silentRunning: action.data,
                },
            };
        case EVT_CARGO_SCOOP:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    cargoSoop: action.data,
                },
            };
        case EVT_HARDPOINTS:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    hardpoints: action.data,
                },
            };
        case EVT_HEADLIGHTS:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    headlights: action.data,
                },
            };
        default:
            return state;
    }
}
