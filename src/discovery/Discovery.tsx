import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ShipGuiFocus } from "../app/hudStateTypes";
import { RootState } from "../app/store";
import ButtonBigLoader from "../buttons/ButtonBigLoader";
import { ReactComponent as Middle } from "../static/SVG/btn_big_horizontal_middle.svg";
import { ReactComponent as Side } from "../static/SVG/btn_big_horizontal_side.svg";
import { ReactComponent as SideActive } from "../static/SVG/btn_big_horizontal_side_active.svg";
import { ReactComponent as Fss } from "../static/SVG/fss.svg";
import { ReactComponent as GalaxyMap } from "../static/SVG/galaxy_map.svg";
import { ReactComponent as SystemMap } from "../static/SVG/system_map.svg";
import "./Discovery.css";
import { toggleFSS, toggleGalaxyMap, toggleSystemMap } from "./DiscoveryActions";

const connector = connect((state: RootState) => ({
    focus: state.hud.ship.guiFocus,
}));

type Props = ConnectedProps<typeof connector>;

const Discovery: FC<Props> = ({ focus }) => {
    const galaxyMapActive = focus === ShipGuiFocus.GalaxyMap;
    const systemMapActive = focus === ShipGuiFocus.SystemMap;
    const fssActive = focus === ShipGuiFocus.FssMode;

    return (
        <div className="discovery-controls">
            <ButtonBigLoader
                active={galaxyMapActive}
                className={`horizontal side left`}
                onClick={toggleGalaxyMap}
                title="galaxy map"
            >
                <div className="bg">{galaxyMapActive ? <SideActive /> : <Side />}</div>
                <div className="icon">
                    <GalaxyMap width={65} />
                </div>
            </ButtonBigLoader>
            <ButtonBigLoader active={fssActive} className={`horizontal middle`} onClick={toggleFSS} title="fss scanner">
                <div className="bg">
                    <Middle />
                </div>
                <div className="icon">
                    <Fss width={140} />
                </div>
            </ButtonBigLoader>
            <ButtonBigLoader
                active={systemMapActive}
                className={`horizontal side right`}
                onClick={toggleSystemMap}
                title="system map"
            >
                <div className="bg">{systemMapActive ? <SideActive /> : <Side />}</div>
                <div className="icon">
                    <SystemMap width={140} />
                </div>
            </ButtonBigLoader>
        </div>
    );
};

export default connector(Discovery);
