import React, { FC, useEffect, useState } from "react";
import "./App.css";
import AnalysisMode from "./AnalysisMode";
import { WebSocketContext } from "./WebSocketContext";
import ModeSwitch from "./mode-switch/ModeSwitch";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./app/store";

const connector = connect((state: RootState) => ({
    connected: state.session.connected,
}));

type Props = ConnectedProps<typeof connector>;

const App: FC<Props> = ({ connected }) => {
    const [socket, setSocket] = useState<WebSocket>();
    useEffect(() => {
        // disable context menus
        document.addEventListener("contextmenu", (event) => event.preventDefault());

        // create a new websocket and connect
        const ws = new WebSocket("ws://192.168.0.20:8181/");

        // when the connection is established, this method is called
        ws.onopen = function () {
            setSocket(socket);
        };

        // when the connection is closed, this method is called
        ws.onclose = function () {};

        return () => {
            ws.close();
        };
    }, [socket]);
    return (
        <WebSocketContext.Provider value={socket}>
            <div className="App">
                {!connected && <div className="">Connecting..</div>}
                {connected && (
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
        </WebSocketContext.Provider>
    );
};

export default connector(App);
