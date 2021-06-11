import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./InfoPanel.css";

import { ReactComponent as CircleButton } from "../static/SVG/btn_circle.svg";
import { ReactComponent as CameraIcon } from "../static/SVG/camera.svg";
import { RootState } from "../app/store";

const connector = connect((state: RootState) => ({}));

type Props = ConnectedProps<typeof connector>;

const InfoPanel: FC<Props> = (props) => {
    return (
        <div className="info-panel">
            <div className="commander-info">
                <div className="commander-name font-big active-color">CMDR Randomeda</div>
                <div className="credits font-medium">2,120,000,000 CR</div>
            </div>
            <div className="ship-info">
                <div className="label font-small active-color">ship</div>
                <div className="ship-type font-medium">federal corvette</div>
                <div className="label font-small active-color">ship name</div>
                <div className="ship-name font-medium">flos mortem</div>
                <div className="label font-small active-color">insurance</div>
                <div className="insurance font-medium">28,000,000 CR</div>
                <div className="label font-small active-color">fuel</div>
                <div className="fuel font-medium">
                    <div className="bar">
                        <div className="filled" style={{ width: "50%" }}></div>
                    </div>
                    <div className="value">
                        <span className="current">12</span>/<span className="max">64</span>T
                    </div>
                </div>
                <div className="label font-small active-color">jump range</div>
                <div className="jump-range">24.6 LY</div>
            </div>
            <div className="cargo">
                <div className="title font-big active-color">cargo</div>
                <div className="capacity font-medium">
                    <div className="bar">
                        <div className="filled" style={{ width: "50%" }}></div>
                    </div>
                    <div className="value">
                        <span className="current">12</span>/<span className="max">64</span>T
                    </div>
                </div>
                <div className="cargo-item font-small">alexandrite (45)</div>
                <div className="cargo-item font-small">musgravite (10)</div>
                <div className="cargo-item font-small">benitoite (20)</div>
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
