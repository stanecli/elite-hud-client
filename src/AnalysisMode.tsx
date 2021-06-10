import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./app/rootReducer";
import "./Buttons.css";
import Discovery from "./Discovery";
import ShipControls from "./ShipControls";
import "./Layout.css";

const connector = connect((state: RootState) => ({
    connected: state.session.connected,
    status: state.hud.status,
}));

type Props = ConnectedProps<typeof connector>;

const AnalysisMode: FC<Props> = ({ connected }) => {
    return (
        <div>
            {!connected && <div className="">Connecting..</div>}
            {connected && (
                <div className="middle-column">
                    <ShipControls />
                    <Discovery />
                </div>
            )}
        </div>
    );
};

export default connector(AnalysisMode);
