import React, { useEffect, useState } from "react";
import "./App.css";
import AnalysisMode from "./AnalysisMode";
import { WebSocketContext } from "./WebSocketContext";

function App() {
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
                <AnalysisMode />
            </div>
        </WebSocketContext.Provider>
    );
}

export default App;
