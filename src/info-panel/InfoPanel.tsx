import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./InfoPanel.css";

import { ReactComponent as CircleButton } from "../static/SVG/btn_circle.svg";
import { ReactComponent as CameraIcon } from "../static/SVG/camera.svg";
import { RootState } from "../app/store";

const connector = connect((state: RootState) => ({
    status: state.hud.status,
    loadout: state.hud.loadout,
    cargo: state.hud.cargo,
}));

type Props = ConnectedProps<typeof connector>;

const InfoPanel: FC<Props> = ({ status, loadout, cargo }) => {
    return (
        <div className="info-panel">
            <div className="commander-info">
                <div className="commander-name font-big active-color">CMDR {status?.commander}</div>
                <div className="credits font-medium">{status?.credits.toLocaleString("en")} CR</div>
            </div>
            <div className="ship-info">
                <div className="label font-small active-color">ship</div>
                <div className="ship-type font-medium">{status?.shipTypeLocalised}</div>
                <div className="label font-small active-color">ship name</div>
                <div className="ship-name font-medium">{status?.shipName}</div>
                <div className="label font-small active-color">insurance</div>
                <div className="insurance font-medium">{loadout?.rebuy.toLocaleString("en")} CR</div>
                <div className="label font-small active-color">fuel</div>
                <div className="fuel font-medium">
                    <div className="bar">
                        <div
                            className="filled"
                            style={{ width: ((status?.fuelLevel || 0) / (status?.fuelCapacity || 1)) * 100 + "%" }}
                        ></div>
                    </div>
                    <div className="value">
                        <span className="current">{status?.fuelLevel.toFixed(1)}</span>
                        <span className="separator">/</span>
                        <span className="max">{status?.fuelCapacity}</span>T
                    </div>
                </div>
                <div className="label font-small active-color">jump range</div>
                <div className="jump-range">{loadout?.maxJumpRange.toFixed(2)} LY</div>
            </div>
            <div className="cargo">
                <div className="title font-big active-color">cargo</div>
                <div className="capacity font-medium">
                    <div className="bar">
                        <div className="filled" style={{ width: "50%" }}></div>
                    </div>
                    <div className="value">
                        <span className="current">{cargo?.count.value}</span>
                        <span className="separator">/</span>
                        <span className="max">{cargo?.inventory.value.length}</span>T
                    </div>
                </div>
                {cargo?.inventory.value.map((item, i) => (
                    <div className="cargo-item font-small" key={i}>
                        {item.name_Localised || item.name} ({item.count})
                    </div>
                ))}
            </div>
            <div className="camera-button">
                <CircleButton className="bg" width={130} />
                <CameraIcon width={70} className="icon" />
                <div className="label font-medium">external camera</div>
            </div>
        </div>
    );
};

export default connector(InfoPanel);
