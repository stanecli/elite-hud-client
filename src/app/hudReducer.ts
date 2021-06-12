import {
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
    EVT_LANDING_GEAR,
    EVT_LOADOUT,
    EVT_LOAD_GAME,
    EVT_MASS_LOCK,
    EVT_NIGHTVISION,
    EVT_ORBIT_LINES,
    EVT_ROTATIONAL_CORRECTION,
    EVT_SILENT_RUNNING,
    EVT_SUPERCRUISE,
    EVT_SUPERCRUISE_CHARGING,
} from "./hudActions";
import { HudActionTypes } from "./hudActionTypes";
import { FSDStatus, HudState, ShipGuiFocus } from "./hudStateTypes";

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
        guiFocus: ShipGuiFocus.NoFocus,
    },
    fsd: {
        status: FSDStatus.Thrusters,
        isCharging: false,
        onCooldown: false,
        isJumping: false,
        massLocked: false,
        isDropping: false,
        isHyperJumpCharging: false,
        isSuperCruiseCharging: false,
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
        case EVT_HUD:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    hud: action.data,
                },
            };
        case EVT_ORBIT_LINES:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    orbitLines: action.data,
                },
            };
        case EVT_ROTATIONAL_CORRECTION:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    rotationalCorrection: action.data,
                },
            };
        case EVT_GUI_FOCUS:
            return {
                ...state,
                ship: {
                    ...state.ship,
                    guiFocus: action.data,
                },
            };
        case EVT_SUPERCRUISE:
            return {
                ...state,
                fsd: {
                    ...state.fsd,
                    status: action.data ? FSDStatus.SuperCruise : FSDStatus.Thrusters,
                    isHyperJumpCharging: false,
                    isSuperCruiseCharging: false,
                    isCharging: false,
                    isJumping: false,
                },
            };
        case EVT_FSD_CHARGING:
            return {
                ...state,
                fsd: {
                    ...state.fsd,
                    isCharging: action.data,
                    // guess from button press. if no buttons pressed, try to guess from fsd state
                    isHyperJumpCharging:
                        action.data &&
                        !state.fsd.isSuperCruiseCharging &&
                        (state.fsd.isHyperJumpCharging || state.fsd.status === FSDStatus.SuperCruise),
                    isSuperCruiseCharging:
                        action.data &&
                        !state.fsd.isHyperJumpCharging &&
                        (state.fsd.isSuperCruiseCharging || state.fsd.status === FSDStatus.Thrusters),
                },
            };
        case EVT_FSD_COOLDOWN:
            return {
                ...state,
                fsd: {
                    ...state.fsd,
                    onCooldown: action.data,
                },
            };
        case EVT_HYPERJUMP: // entering SC or HYPER
            return {
                ...state,
                fsd: {
                    ...state.fsd,
                    isJumping: action.data,
                    isHyperJumpCharging: false,
                    isSuperCruiseCharging: false,
                    status:
                        state.fsd.status === FSDStatus.SuperCruise && action.data
                            ? FSDStatus.HyerpJump
                            : FSDStatus.SuperCruise,
                },
            };
        case EVT_LOADOUT:
            return {
                ...state,
                loadout: action.data,
            };
        case EVT_MASS_LOCK:
            return {
                ...state,
                fsd: {
                    ...state.fsd,
                    massLocked: action.data,
                    status: FSDStatus.Thrusters,
                    isHyperJumpCharging: false,
                    isSuperCruiseCharging: false,
                    isCharging: false,
                    isJumping: false,
                },
            };
        case EVT_HYPERJUMP_CHARGING:
            return {
                ...state,
                fsd: {
                    ...state.fsd,
                    isHyperJumpCharging: !state.fsd.isCharging,
                    isCharging: !state.fsd.isCharging,
                },
            };
        case EVT_SUPERCRUISE_CHARGING:
            return {
                ...state,
                fsd: {
                    ...state.fsd,
                    isSuperCruiseCharging: action.data,
                    isCharging: action.data,
                },
            };
        case EVT_DROPPING_OUT:
            return {
                ...state,
                fsd: {
                    ...state.fsd,
                    isDropping: action.data,
                    isHyperJumpCharging: false,
                    isSuperCruiseCharging: false,
                    isCharging: false,
                },
            };
        default:
            return state;
    }
}
