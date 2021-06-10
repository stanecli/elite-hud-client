import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./app/rootReducer";
import "./Buttons.css";
import "./Discovery.css";

import { ReactComponent as Side } from "./static/SVG/btn_big_horizontal_side.svg";
import { ReactComponent as SideActive } from "./static/SVG/btn_big_horizontal_side_active.svg";
import { ReactComponent as Middle } from "./static/SVG/btn_big_horizontal_middle.svg";
import { ReactComponent as GalaxyMap } from "./static/SVG/galaxy_map.svg";
import { ReactComponent as SystemMap } from "./static/SVG/system_map.svg";
import { ReactComponent as Fss } from "./static/SVG/fss.svg";

const connector = connect((state: RootState) => ({}));

type Props = ConnectedProps<typeof connector>;

const Discovery: FC<Props> = (props) => {
    return (
        <div className="discovery-controls">
            <div className="button horizontal side left">
                <div className="bg">
                    <SideActive />
                </div>
                <div className="icon">
                    <GalaxyMap width={65} />
                </div>
                <div className="label">galaxy map</div>
            </div>
            <div className="button horizontal middle">
                <div className="bg">
                    <Middle />
                </div>
                <div className="icon">
                    <Fss width={140} />
                </div>
                <div className="label">fss scanner</div>
            </div>
            <div className="button horizontal side right">
                <div className="bg">
                    <Side />
                </div>
                <div className="icon">
                    <SystemMap width={140} />
                </div>
                <div className="label">system map</div>
            </div>
        </div>
    );
};

export default connector(Discovery);
