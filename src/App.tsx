import React, { FC, useEffect, useState } from "react";
import "./App.css";
import AnalysisMode from "./AnalysisMode";
import ModeSwitch from "./mode-switch/ModeSwitch";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./app/store";
import WelcomScreen from "./welcome-screen/WelcomeScreen";

const connector = connect((state: RootState) => ({
    connected: state.session.connected,
}));

type Props = ConnectedProps<typeof connector>;

const App: FC<Props> = ({ connected }) => {
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
        <div className="App">
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
