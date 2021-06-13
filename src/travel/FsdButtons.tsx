import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ACT_PRESS_KEYS, EVT_DROPPING_OUT, EVT_HYPERJUMP_CHARGING, EVT_SUPERCRUISE_CHARGING } from "../app/hudActions";
import {
    DroppingChangedAction,
    HyperJumpCharingChangedAction,
    KeyPressMode,
    PressKeysAction,
    SuperCruiseChargingChangedAction,
} from "../app/hudActionTypes";
import { FSDStatus } from "../app/hudStateTypes";
import { RootState } from "../app/store";
import Loader from "../buttons/Loader";
import { ReactComponent as Middle } from "../static/SVG/btn_big_vertical_middle.svg";
import { ReactComponent as MiddleActive } from "../static/SVG/btn_big_vertical_middle_active.svg";
import { ReactComponent as Side } from "../static/SVG/btn_big_vertical_side.svg";
import { ReactComponent as SideActive } from "../static/SVG/btn_big_vertical_side_active.svg";
import { ReactComponent as HyperJump } from "../static/SVG/hyperjump.svg";
import { ReactComponent as SuperCruise } from "../static/SVG/supercruise.svg";
import { ReactComponent as Thrusters } from "../static/SVG/thrusters.svg";

const connector = connect((state: RootState) => ({
    onCoolDown: state.hud.ship.fsdCooldown,
    massLocked: state.hud.ship.massLocked,
    isSuperCruiseCharging: state.hud.ship.isSuperCruiseCharging,
    isHyperJumpCharging: state.hud.ship.isHyperJumpCharging,
    isDropping: state.hud.ship.isDropping,
    status: state.hud.ship.fsdStatus,
    ship: state.hud.ship,
}));

enum ButtonState {
    disabled,
    enabled,
    loading,
    active,
}

type Props = ConnectedProps<typeof connector>;

const dropLabel = {
    [ButtonState.disabled]: "",
    [ButtonState.enabled]: "drop out",
    [ButtonState.loading]: "dropping out",
    [ButtonState.active]: "on thrusters",
};

const superCruiseLabel = {
    [ButtonState.disabled]: "",
    [ButtonState.enabled]: "supercruise",
    [ButtonState.loading]: "FSD charging",
    [ButtonState.active]: "in supercruise",
};

const hyperJumpLabel = {
    [ButtonState.disabled]: "",
    [ButtonState.enabled]: "hyperjump",
    [ButtonState.loading]: "FSD charging",
    [ButtonState.active]: "jumping",
};

const FsdButtons: FC<Props> = ({
    dispatch,
    onCoolDown,
    isSuperCruiseCharging,
    isHyperJumpCharging,
    isDropping,
    status,
    massLocked,
    ship,
}) => {
    let hyperJump: ButtonState = ButtonState.enabled;
    let superCruise: ButtonState = ButtonState.enabled;
    let drop: ButtonState = ButtonState.enabled;
    const disabledText = onCoolDown
        ? "cooldown"
        : status === FSDStatus.HyerpJump
        ? "in hyperspace"
        : massLocked
        ? "mass locked"
        : ship.hardpoints
        ? "hardpoints"
        : ship.cargoScoop
        ? "cargo scoop"
        : ship.gear
        ? "landing gear"
        : "";
    if (onCoolDown || massLocked) {
        hyperJump = ButtonState.disabled;
        superCruise = ButtonState.disabled;
    }
    if (status === FSDStatus.SuperCruise) {
        superCruise = ButtonState.active;
    }
    if (status === FSDStatus.HyerpJump) {
        hyperJump = ButtonState.active;
        drop = ButtonState.disabled;
        superCruise = ButtonState.disabled;
    }
    if (ship.hardpoints || ship.cargoScoop || ship.gear) {
        hyperJump = ButtonState.disabled;
        superCruise = ButtonState.disabled;
    }
    if (status === FSDStatus.Thrusters) {
        drop = ButtonState.active;
    }
    if (isSuperCruiseCharging) {
        superCruise = ButtonState.loading;
    }
    if (isHyperJumpCharging) {
        hyperJump = ButtonState.loading;
    }
    if (isDropping) {
        drop = ButtonState.loading;
    }

    useEffect(() => {
        let timeout = -1;
        if (isDropping) {
            timeout = window.setTimeout(
                () =>
                    dispatch<DroppingChangedAction>({
                        type: EVT_DROPPING_OUT,
                        data: false,
                    }),
                3000
            );
        }
        return () => window.clearTimeout(timeout);
    }, [dispatch, isDropping]);

    useEffect(() => {
        let timeout = -1;
        if (isHyperJumpCharging) {
            timeout = window.setTimeout(
                () =>
                    dispatch<HyperJumpCharingChangedAction>({
                        type: EVT_HYPERJUMP_CHARGING,
                        data: false,
                    }),
                250000
            );
        }
        return () => window.clearTimeout(timeout);
    }, [dispatch, isHyperJumpCharging]);

    useEffect(() => {
        let timeout = -1;
        if (isSuperCruiseCharging) {
            timeout = window.setTimeout(
                () =>
                    dispatch<SuperCruiseChargingChangedAction>({
                        type: EVT_SUPERCRUISE_CHARGING,
                        data: false,
                    }),
                15000
            );
        }
        return () => window.clearTimeout(timeout);
    }, [dispatch, isSuperCruiseCharging]);
    return (
        <div className="middle-section">
            <div
                className={`button vertical side top ${ButtonState[hyperJump]}`}
                onPointerDown={() => {
                    if (
                        superCruise !== ButtonState.loading &&
                        (hyperJump === ButtonState.enabled || hyperJump === ButtonState.loading)
                    ) {
                        dispatch<HyperJumpCharingChangedAction>({
                            type: EVT_HYPERJUMP_CHARGING,
                            data: !isHyperJumpCharging,
                        });
                        dispatch<PressKeysAction>({
                            type: ACT_PRESS_KEYS,
                            keys: ["K"],
                            mode: KeyPressMode.Sequential,
                        });
                    }
                }}
            >
                <div className="bg">{hyperJump === ButtonState.active ? <SideActive /> : <Side />}</div>
                <div className="icon">
                    <HyperJump width={120} />
                </div>
                <div className="label">
                    {hyperJump === ButtonState.disabled ? disabledText : hyperJumpLabel[hyperJump]}
                </div>
                <Loader />
            </div>
            <div
                className={`button vertical middle ${ButtonState[superCruise]}`}
                onPointerDown={() => {
                    if (
                        hyperJump !== ButtonState.loading &&
                        (superCruise === ButtonState.enabled || superCruise === ButtonState.loading)
                    ) {
                        dispatch<SuperCruiseChargingChangedAction>({
                            type: EVT_SUPERCRUISE_CHARGING,
                            data: !isSuperCruiseCharging,
                        });
                        dispatch<PressKeysAction>({
                            type: ACT_PRESS_KEYS,
                            keys: ["J"],
                            mode: KeyPressMode.Sequential,
                        });
                    }
                }}
            >
                <div className="bg">{superCruise === ButtonState.active ? <MiddleActive /> : <Middle />}</div>
                <div className="icon">
                    <SuperCruise width={140} />
                </div>
                <div className="label">
                    {superCruise === ButtonState.disabled ? disabledText : superCruiseLabel[superCruise]}
                </div>
                <Loader />
            </div>
            <div
                className={`button vertical side flip ${ButtonState[drop]}`}
                onPointerDown={() => {
                    if (drop === ButtonState.enabled) {
                        dispatch<DroppingChangedAction>({
                            type: EVT_DROPPING_OUT,
                            data: !isDropping,
                        });
                        dispatch<PressKeysAction>({
                            type: ACT_PRESS_KEYS,
                            keys: ["J"],
                            mode: KeyPressMode.Sequential,
                        });
                    }
                }}
            >
                <div className="bg">{drop === ButtonState.active ? <SideActive /> : <Side />}</div>
                <div className="icon">
                    <Thrusters width={140} />
                </div>
                <div className="label">{drop === ButtonState.disabled ? disabledText : dropLabel[drop]}</div>
                <Loader />
            </div>
        </div>
    );
};

export default connector(FsdButtons);
