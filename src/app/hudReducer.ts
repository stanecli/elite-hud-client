import {
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
import { HudActionTypes } from "./hudActionTypes";
import { FSDStatus, HudState } from "./hudStateTypes";
import produce from "immer";
import { store } from "./store";

const initialState: HudState = {
    cargo: {},
    loadout: {},
    ship: {},
};

export const hudReducer = produce((draft: HudState, action: HudActionTypes) => {
    switch (action.type) {
        case EVT_INITIALIZE:
            const ship = action.data.ship;
            const fsdStatus =
                ship.supercruise && ship.fsdJump
                    ? FSDStatus.HyerpJump
                    : ship.supercruise
                    ? FSDStatus.SuperCruise
                    : FSDStatus.Thrusters;
            draft.status = {
                commander: action.data.loadGameData.commander,
                credits: action.data.loadGameData.credits,
                fuelCapacity: action.data.loadGameData.fuelCapacity,
                fuelLevel: action.data.loadGameData.fuelLevel,
                shipName: action.data.loadGameData.shipName,
                shipType: action.data.loadGameData.ship,
                shipTypeLocalised: action.data.loadGameData.ship_Localised,
            };
            draft.cargo = action.data.cargo;
            draft.loadout = action.data.loadout;
            draft.ship = {
                ...action.data.ship,
                orbitLines: false,
                rotationalCorrection: false,
                hud: false,
                isDropping: false,
                isHyperJumpCharging: false,
                isSuperCruiseCharging: false,
                fsdStatus,
            };
            break;
        case EVT_SHIPFLAGS:
            draft.ship.flags = action.data;
            break;
        case EVT_LANDING_GEAR:
            draft.ship.gear = action.data;
            break;
        case EVT_NIGHTVISION:
            draft.ship.nightVision = action.data;
            break;
        case EVT_SILENT_RUNNING:
            draft.ship.silentRunning = action.data;
            break;
        case EVT_CARGO_SCOOP:
            draft.ship.cargoScoop = action.data;
            break;
        case EVT_HARDPOINTS:
            draft.ship.hardpoints = action.data;
            break;
        case EVT_HEADLIGHTS:
            draft.ship.lights = action.data;
            break;
        case EVT_HUD:
            draft.ship.hud = action.data;
            break;
        case EVT_ORBIT_LINES:
            draft.ship.orbitLines = action.data;
            break;
        case EVT_ROTATIONAL_CORRECTION:
            draft.ship.rotationalCorrection = action.data;
            break;
        case EVT_GUI_FOCUS:
            draft.ship.guiFocus = action.data;
            break;
        case EVT_SUPERCRUISE:
            draft.ship.fsdStatus = action.data ? FSDStatus.SuperCruise : FSDStatus.Thrusters;
            draft.ship.isHyperJumpCharging = false;
            draft.ship.isSuperCruiseCharging = false;
            draft.ship.fsdCharging = false;
            draft.ship.fsdJump = false;
            break;
        case EVT_FSD_CHARGING:
            const state = store.getState().hud.ship;
            draft.ship.fsdCharging = action.data;
            // guess from button press. if no buttons pressed, try to guess from fsd state
            draft.ship.isHyperJumpCharging =
                action.data &&
                !state.isSuperCruiseCharging &&
                (state.isHyperJumpCharging || draft.ship.fsdStatus === FSDStatus.SuperCruise);
            draft.ship.isSuperCruiseCharging =
                action.data &&
                !state.isHyperJumpCharging &&
                (state.isSuperCruiseCharging || draft.ship.fsdStatus === FSDStatus.Thrusters);
            break;
        case EVT_FSD_COOLDOWN:
            draft.ship.fsdCooldown = action.data;
            break;
        case EVT_HYPERJUMP: // entering SC or HYPER
            draft.ship.fsdCharging = action.data;
            draft.ship.fsdJump = action.data;
            draft.ship.isHyperJumpCharging = false;
            draft.ship.isSuperCruiseCharging = false;
            draft.ship.fsdStatus =
                draft.ship.fsdStatus === FSDStatus.SuperCruise && action.data
                    ? FSDStatus.HyerpJump
                    : FSDStatus.SuperCruise;
            break;
        case EVT_LOADOUT:
            draft.loadout = action.data;
            break;
        case EVT_MASS_LOCK:
            draft.ship.massLocked = action.data;
            draft.ship.fsdStatus = FSDStatus.Thrusters;
            draft.ship.isHyperJumpCharging = false;
            draft.ship.isSuperCruiseCharging = false;
            draft.ship.fsdCharging = false;
            draft.ship.fsdJump = false;
            break;
        case EVT_HYPERJUMP_CHARGING:
            draft.ship.isHyperJumpCharging = action.data;
            draft.ship.fsdCharging = action.data;
            break;
        case EVT_SUPERCRUISE_CHARGING:
            draft.ship.isSuperCruiseCharging = action.data;
            draft.ship.fsdCharging = action.data;
            break;
        case EVT_DROPPING_OUT:
            draft.ship.isDropping = action.data;
            draft.ship.isHyperJumpCharging = false;
            draft.ship.isSuperCruiseCharging = false;
            draft.ship.fsdCharging = false;
            break;
        case EVT_CARGO:
            draft.cargo = action.data;
            break;
        case EVT_ANALYSIS_MODE:
            draft.ship.analysisMode = action.data;
            break;
    }
}, initialState);
