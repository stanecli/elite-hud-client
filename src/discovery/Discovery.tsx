import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Discovery.css";

import { ReactComponent as Side } from "../static/SVG/btn_big_horizontal_side.svg";
import { ReactComponent as SideActive } from "../static/SVG/btn_big_horizontal_side_active.svg";
import { ReactComponent as Middle } from "../static/SVG/btn_big_horizontal_middle.svg";
import { ReactComponent as GalaxyMap } from "../static/SVG/galaxy_map.svg";
import { ReactComponent as SystemMap } from "../static/SVG/system_map.svg";
import { ReactComponent as Fss } from "../static/SVG/fss.svg";
import { RootState } from "../app/store";
import { ShipGuiFocus } from "../app/hudStateTypes";
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
            <div
                className={`button horizontal side left ${galaxyMapActive ? "active" : ""}`}
                onMouseDown={toggleGalaxyMap}
            >
                <div className="bg">{galaxyMapActive ? <SideActive /> : <Side />}</div>
                <div className="icon">
                    <GalaxyMap width={65} />
                </div>
                <div className="label">galaxy map</div>
            </div>
            <div className={`button horizontal middle ${fssActive ? "active" : ""}`} onMouseDown={toggleFSS}>
                <div className="bg">
                    <Middle />
                </div>
                <div className="icon">
                    <Fss width={140} />
                </div>
                <div className="label">fss scanner</div>
            </div>
            <div
                className={`button horizontal side right ${systemMapActive ? "active" : ""}`}
                onMouseDown={toggleSystemMap}
            >
                <div className="bg">{systemMapActive ? <SideActive /> : <Side />}</div>
                <div className="icon">
                    <SystemMap width={140} />
                </div>
                <div className="label">system map</div>
            </div>
        </div>
    );
};

export default connector(Discovery);
