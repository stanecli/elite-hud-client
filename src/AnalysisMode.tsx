import React, { FC } from "react";
import "./buttons/Buttons.css";
import Discovery from "./discovery/Discovery";
import InfoPanel from "./info-panel/InfoPanel";
import ShipControls from "./ship-control/ShipControls";
import Travel from "./travel/Travel";

const AnalysisMode: FC = () => {
    return (
        <>
            <div className="left-side">
                <InfoPanel />
            </div>
            <div className="middle-column">
                <ShipControls />
                <Discovery />
            </div>
            <div className="right-side">
                <Travel />
            </div>
        </>
    );
};

export default AnalysisMode;
