import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import "../Buttons.css";
import "./ShipControls.css";
import ButtonSmall, { ButtonSide } from "../ButtonSmall";

// icons
import { ReactComponent as LinesFederalCrovette } from "../static/SVG/lines_federal_corvette.svg";
import { ReactComponent as CargoScoop } from "../static/SVG/cargo_scoop.svg";
import { ReactComponent as HardPoints } from "../static/SVG/hardpoints.svg";
import { ReactComponent as Headlights } from "../static/SVG/headlights.svg";
import { ReactComponent as LandingGear } from "../static/SVG/landing_gear.svg";
import { ReactComponent as Nightvision } from "../static/SVG/nightvision.svg";
import { ReactComponent as SilentRunning } from "../static/SVG/silent_running.svg";
import { ReactComponent as RotationCorrection } from "../static/SVG/rotational_correction.svg";
import { ReactComponent as OrbitLines } from "../static/SVG/orbit_lines.svg";
import { ReactComponent as Hud } from "../static/SVG/hud.svg";
import {
    toggleCargoScoop,
    toggleHardpoints,
    toggleHeadlights,
    toggleLandingGear,
    toggleNightVision,
    toggleSilentRunning,
} from "./shipControlActions";
import { RootState } from "../app/store";

const connector = connect((state: RootState) => ({
    ship: state.hud.ship,
    shipType: state.hud.status?.shipType,
}));

type Props = ConnectedProps<typeof connector>;

const ShipControls: FC<Props> = ({ ship, shipType }) => {
    return (
        <div className="ship-controls">
            <div className="top-row">
                <div className="left-side">
                    <ButtonSmall
                        side={ButtonSide.Right}
                        title="hardpoints"
                        active={ship.hardpoints}
                        onText="deployed"
                        offText="retracted"
                        onClick={toggleHardpoints}
                    >
                        <HardPoints />
                    </ButtonSmall>
                    <ButtonSmall
                        side={ButtonSide.Right}
                        title="cargo scoop"
                        active={ship.cargoSoop}
                        onText="open"
                        offText="closed"
                        onClick={toggleCargoScoop}
                    >
                        <CargoScoop width="50" />
                    </ButtonSmall>
                    <ButtonSmall
                        side={ButtonSide.Right}
                        title="landing gear"
                        offText="retracted"
                        onText="deployed"
                        active={ship.landingGear}
                        onClick={toggleLandingGear}
                    >
                        <LandingGear width="35" />
                    </ButtonSmall>
                    <div className="hull info">
                        <div className="percent">100%</div>
                        <div className="label">hull</div>
                    </div>
                </div>
                <div className="center">
                    <LinesFederalCrovette width={294} height={432} className="lines" />
                    <div className={`ship-image ${shipType}`}></div>
                </div>
                <div className="right-side">
                    <ButtonSmall
                        side={ButtonSide.Left}
                        title="headlights"
                        active={ship.headlights}
                        onClick={toggleHeadlights}
                    >
                        <Headlights width="32" />
                    </ButtonSmall>
                    <ButtonSmall
                        side={ButtonSide.Left}
                        title="nightvision"
                        active={ship.nightVision}
                        onClick={toggleNightVision}
                    >
                        <Nightvision width="36" />
                    </ButtonSmall>
                    <ButtonSmall
                        side={ButtonSide.Left}
                        title="silent running"
                        alarm={true}
                        active={ship.silentRunning}
                        onClick={toggleSilentRunning}
                    >
                        <SilentRunning width="51" />
                    </ButtonSmall>
                    <div className="shields info">
                        <div className="percent">100%</div>
                        <div className="label">shields</div>
                    </div>
                </div>
            </div>
            <div className="bottom-row">
                <ButtonSmall side={ButtonSide.Left} title="rotational corr." active={ship.rotationalCorrection}>
                    <RotationCorrection width="41" />
                </ButtonSmall>
                <ButtonSmall side={ButtonSide.Left} title="orbit lines" active={ship.orbitLines}>
                    <OrbitLines width="64" />
                </ButtonSmall>
                <ButtonSmall side={ButtonSide.Left} title="hud" active={ship.hud}>
                    <Hud width="56" />
                </ButtonSmall>
            </div>
        </div>
    );
};

export default connector(ShipControls);
