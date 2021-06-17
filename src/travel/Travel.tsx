import React, { FC, useState } from "react";
import { ReactComponent as Arrow } from "../static/SVG/btn_big_vertical_arrow.svg";
import { ReactComponent as ArrowActive } from "../static/SVG/btn_big_vertical_arrow_active.svg";
import { ReactComponent as EmergencyDrop } from "../static/SVG/emergency_drop.svg";
import { ReactComponent as NextSystem } from "../static/SVG/next_system.svg";
import FsdButtons from "./FsdButtons";
import "./Travel.css";
import { emergencyDrop, targetNextSystemInRoute } from "./TravelActions";

const Travel: FC = () => {
    const [nextSystemActive, setNextSystemActive] = useState(false);
    const [emergencyDropActive, setemergencyDropActive] = useState(false);
    return (
        <div className="travel-controls">
            <div
                className={`button vertical arrow top ${nextSystemActive ? "active" : ""}`}
                onPointerDown={() => {
                    setNextSystemActive(true);
                    targetNextSystemInRoute();
                }}
                onPointerUp={() => setNextSystemActive(false)}
                onPointerCancel={() => setNextSystemActive(false)}
            >
                <div className="bg">{nextSystemActive ? <ArrowActive /> : <Arrow />}</div>
                <div className="icon">
                    <NextSystem width={102} />
                </div>
                <div className="label">next system in route</div>
            </div>
            <FsdButtons />
            <div
                className={`button vertical arrow flip alarm ${emergencyDropActive ? "active" : ""}`}
                onPointerDown={() => {
                    setemergencyDropActive(true);
                    emergencyDrop();
                }}
                onPointerUp={() => setemergencyDropActive(false)}
                onPointerCancel={() => setemergencyDropActive(false)}
            >
                <div className="bg">{emergencyDropActive ? <ArrowActive /> : <Arrow />}</div>
                <div className="icon">
                    <EmergencyDrop width={140} />
                </div>
                <div className="label">emergency drop</div>
            </div>
        </div>
    );
};

export default Travel;
