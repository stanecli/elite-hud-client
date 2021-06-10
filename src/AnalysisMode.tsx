import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./app/rootReducer";
import "./Layout.css";
import "./Buttons.css";
import ButtonSmall, { Side } from "./ButtonSmall";

// icons
import { ReactComponent as HardPointsIconNormal } from "./static/SVG/hardpoints_icon_normal.svg";
import { ReactComponent as HardPointsIconActive } from "./static/SVG/hardpoints_icon_active.svg";
import { ReactComponent as CargoScoopIconNormal } from "./static/SVG/cargo_scoop_normal.svg";
import { ReactComponent as CargoScoopIconActive } from "./static/SVG/cargo_scoop_active.svg";
import { ReactComponent as LandingGearIconNormal } from "./static/SVG/landing_gear_normal.svg";
import { ReactComponent as LandingGearIconActive } from "./static/SVG/landing_gear_active.svg";
import { ReactComponent as HeadlightsIconNormal } from "./static/SVG/headlights_normal.svg";
import { ReactComponent as HeadlightsIconActive } from "./static/SVG/headlights_active.svg";
import { ReactComponent as NightvisionIconNormal } from "./static/SVG/nightvision_normal.svg";
import { ReactComponent as NightvisionIconActive } from "./static/SVG/nightvision_active.svg";
import { ReactComponent as SilentRunningIconNormal } from "./static/SVG/silent_running_normal.svg";
import { ReactComponent as SilentRunningIconActive } from "./static/SVG/silent_running_active.svg";
import { ReactComponent as LinesFederalCrovette } from "./static/SVG/lines_federal_corvette.svg";
import { store } from "./app/store";
import { LandingGearAction, NightVisionAction, PressKeysAction } from "./app/hudActionTypes";
import { ACT_PRESS_KEYS, EVT_LANDING_GEAR, EVT_NIGHTVISION } from "./app/hudActions";

const connector = connect((state: RootState) => ({
    connected: state.session.connected,
    messages: state.hud.messages,
    status: state.hud.status,
    landingGearDeployed: state.hud.ship.landingGear,
    nightVision: state.hud.ship.nightVision,
}));

type Props = ConnectedProps<typeof connector>;

const AnalysisMode: FC<Props> = ({ connected, status, landingGearDeployed, nightVision }) => {
    const toggleLandingGear = () => {
        store.dispatch<PressKeysAction>({
            type: ACT_PRESS_KEYS,
            keys: ["L"],
        });
        store.dispatch<LandingGearAction>({
            type: EVT_LANDING_GEAR,
            data: !landingGearDeployed,
        });
    };
    const toggleNightVision = () => {
        store.dispatch<PressKeysAction>({
            type: ACT_PRESS_KEYS,
            keys: ["LControlKey", "Insert"],
        });
        store.dispatch<NightVisionAction>({
            type: EVT_NIGHTVISION,
            data: !nightVision,
        });
    };
    return (
        <div>
            {!connected && <div className="">Connecting..</div>}
            {connected && (
                <div className="ship-controls">
                    <div className="left-side">
                        <ButtonSmall side={Side.Right} title="hardpoints" status="off" active={false}>
                            <div className="normal">
                                <HardPointsIconNormal />
                            </div>
                            <div className="active">
                                <HardPointsIconActive />
                            </div>
                        </ButtonSmall>
                        <ButtonSmall side={Side.Right} title="cargo scoop" status="off" active={false}>
                            <div className="normal">
                                <CargoScoopIconNormal width="50" />
                            </div>
                            <div className="active">
                                <CargoScoopIconActive width="50" />
                            </div>
                        </ButtonSmall>
                        <ButtonSmall
                            side={Side.Right}
                            title="landing gear"
                            status="retracted"
                            active={landingGearDeployed}
                            onClick={toggleLandingGear}
                        >
                            <div className="normal">
                                <LandingGearIconNormal width="35" />
                            </div>
                            <div className="active">
                                <LandingGearIconActive width="35" />
                            </div>
                        </ButtonSmall>
                    </div>
                    <div className="center">
                        <LinesFederalCrovette width={294} height={432} className="lines" />
                        <div className={`ship-image ${status?.ship}`}></div>
                    </div>
                    <div className="right-side">
                        <ButtonSmall side={Side.Left} title="headlights" status="off" active={false}>
                            <div className="normal">
                                <HeadlightsIconNormal width="32" />
                            </div>
                            <div className="active">
                                <HeadlightsIconActive width="32" />
                            </div>
                        </ButtonSmall>
                        <ButtonSmall
                            side={Side.Left}
                            title="nightvision"
                            status="off"
                            active={nightVision}
                            onClick={toggleNightVision}
                        >
                            <div className="normal">
                                <NightvisionIconNormal width="36" />
                            </div>
                            <div className="active">
                                <NightvisionIconActive width="36" />
                            </div>
                        </ButtonSmall>
                        <ButtonSmall side={Side.Left} title="silent running" status="off" alarm={true} active={false}>
                            <div className="normal">
                                <SilentRunningIconNormal width="51" />
                            </div>
                            <div className="active">
                                <SilentRunningIconActive width="51" />
                            </div>
                        </ButtonSmall>
                    </div>
                </div>
            )}
        </div>
    );
};

export default connector(AnalysisMode);
