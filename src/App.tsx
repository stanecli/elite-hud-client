import React, { FC, useEffect, useState } from "react";
import "./App.css";
import AnalysisMode from "./AnalysisMode";
import ModeSwitch from "./mode-switch/ModeSwitch";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./app/store";
import WelcomScreen from "./welcome-screen/WelcomeScreen";
import { ShipFlags } from "./app/hudStateTypes";

const connector = connect((state: RootState) => ({
    connected: state.session.connected,
    overHeating: ((state.hud.ship.flags || 0) & ShipFlags.Overheating) > 0,
}));

type Props = ConnectedProps<typeof connector>;

const App: FC<Props> = ({ connected, overHeating }) => {
    const [showMain, setShowMain] = useState(false);
    useEffect(() => {
        let timeout = -1;
        if (connected) {
            timeout = window.setTimeout(() => setShowMain(true), 2500);
        } else {
            setShowMain(false);
        }
        return () => {
            window.clearTimeout(timeout);
        };
    }, [connected]);
    useEffect(() => {
        // disable context menus
        document.addEventListener("contextmenu", (event) => event.preventDefault());
    }, []);
    return (
        <div className={`App`}>
            <div className={`app-bg ${overHeating ? "alarm-blink" : ""}`}>
                <div className="bg-inner"></div>
            </div>
            <WelcomScreen />
            {showMain && (
                <div className="layout">
                    <div className="header">
                        <ModeSwitch />
                    </div>
                    <div className="main">
                        <AnalysisMode />
                    </div>
                </div>
            )}
        </div>
    );
};

export default connector(App);
