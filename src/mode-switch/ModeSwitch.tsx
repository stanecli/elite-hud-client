import React, { FC } from "react";
import "./ModeSwitch.css";

import { ReactComponent as AnalysisMode } from "../static/SVG/analysis_mode.svg";
import { ReactComponent as CombatMode } from "../static/SVG/combat_mode.svg";

interface Props {}

const ModeSwitch: FC<Props> = (props) => {
    return (
        <div className="mode-switch">
            <div className="left line fade"></div>
            <div className="center">
                <div className="mode analysis active">
                    <div className="left-bracket"></div>
                    <div className="right-bracket"></div>
                    <AnalysisMode width={28} />
                    <span>analysis mode</span>
                </div>
                <div className="separator-line"></div>
                <div className="mode combat">
                    <div className="left-bracket"></div>
                    <div className="right-bracket"></div>
                    <CombatMode width={28} />
                    <span>combat mode</span>
                </div>
            </div>
            <div className="right line fade"></div>
        </div>
    );
};

export default ModeSwitch;
