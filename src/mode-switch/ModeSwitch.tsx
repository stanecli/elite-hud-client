import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ACT_PRESS_KEYS, EVT_ANALYSIS_MODE } from "../app/hudActions";
import { AnalysisModeChanged, KeyPressMode, PressKeysAction } from "../app/hudActionTypes";
import { RootState } from "../app/store";
import { ReactComponent as AnalysisMode } from "../static/SVG/analysis_mode.svg";
import { ReactComponent as CombatMode } from "../static/SVG/combat_mode.svg";
import "./ModeSwitch.css";

const connector = connect((state: RootState) => ({
    analysisMode: state.hud.ship.analysisMode,
}));

type Props = ConnectedProps<typeof connector>;

const ModeSwitch: FC<Props> = ({ analysisMode, dispatch }) => {
    const toggleAnalysisMode = () => {
        dispatch<AnalysisModeChanged>({
            type: EVT_ANALYSIS_MODE,
            data: !analysisMode,
        });
        dispatch<PressKeysAction>({
            type: ACT_PRESS_KEYS,
            keys: ["OemMinus"],
            mode: KeyPressMode.Sequential,
        });
    };
    const activateAnalysisMode = () => {
        if (!analysisMode) {
            toggleAnalysisMode();
        }
    };
    const activateCombatMode = () => {
        if (analysisMode) {
            toggleAnalysisMode();
        }
    };
    return (
        <div className="mode-switch">
            <div className="left line fade"></div>
            <div className="center">
                <div className={`mode analysis ${analysisMode ? "active" : ""}`} onPointerDown={activateAnalysisMode}>
                    <div className="left-bracket"></div>
                    <div className="right-bracket"></div>
                    <AnalysisMode width={28} />
                    <span>analysis mode</span>
                </div>
                <div className="separator-line"></div>
                <div className={`mode combat ${!analysisMode ? "active" : ""}`} onPointerDown={activateCombatMode}>
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

export default connector(ModeSwitch);
