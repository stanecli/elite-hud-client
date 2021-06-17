import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../app/store";
import "./WelcomeScreen.css";

const connector = connect((state: RootState) => ({
    connected: state.session.connected,
    commander: state.hud.status?.commander,
}));

type Props = ConnectedProps<typeof connector>;

const WelcomScreen: FC<Props> = ({ connected, commander }) => {
    // connected = false;
    return (
        <div className={`welcome-screen ${!connected ? "initializing" : "connected"}`}>
            <div className="logo-and-lines">
                <div className="line"></div>
                <div className="elite-logo"></div>
                <div className="line"></div>
            </div>
            <div className="welcome-text">{connected ? "welcome" : "initializing"}</div>
            <div className="commander-name">cmdr {commander}</div>
        </div>
    );
};

export default connector(WelcomScreen);
