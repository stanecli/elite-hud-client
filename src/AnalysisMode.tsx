import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Buttons.css";
import "./Layout.css";
import InfoPanel from "./info-panel/InfoPanel";
import ShipControls from "./ship-control/ShipControls";
import { RootState } from "./app/store";
import Discovery from "./discovery/Discovery";
import Travel from "./travel/Travel";

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
                <div className="layout">
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
                </div>
            )}
        </div>
    );
};

export default connector(AnalysisMode);
