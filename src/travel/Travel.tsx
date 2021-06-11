import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Travel.css";

import { ReactComponent as Side } from "../static/SVG/btn_big_vertical_side.svg";
import { ReactComponent as SideActive } from "../static/SVG/btn_big_vertical_side_active.svg";
import { ReactComponent as Middle } from "../static/SVG/btn_big_vertical_middle.svg";
import { ReactComponent as MiddleActive } from "../static/SVG/btn_big_vertical_middle.svg";
import { ReactComponent as Arrow } from "../static/SVG/btn_big_vertical_arrow.svg";
import { ReactComponent as ArrowActive } from "../static/SVG/btn_big_vertical_arrow_active.svg";
import { ReactComponent as NextSystem } from "../static/SVG/next_system.svg";
import { ReactComponent as HyperJump } from "../static/SVG/hyperjump.svg";
import { ReactComponent as SuperCruise } from "../static/SVG/supercruise.svg";
import { ReactComponent as Thrusters } from "../static/SVG/thrusters.svg";
import { ReactComponent as EmergencyDrop } from "../static/SVG/emergency_drop.svg";
import { RootState } from "../app/store";

const connector = connect((state: RootState) => ({}));

type Props = ConnectedProps<typeof connector>;

const Travel: FC<Props> = (props) => {
    return (
        <div className="travel-controls">
            <div className="button vertical arrow up">
                <div className="bg">
                    <ArrowActive />
                </div>
                <div className="icon">
                    <NextSystem width={102} />
                </div>
                <div className="label">target next system in route</div>
            </div>
            <div className="middle-section">
                <div className="button vertical side top">
                    <div className="bg">
                        <SideActive />
                    </div>
                    <div className="icon">
                        <HyperJump width={120} />
                    </div>
                    <div className="label">hyperjump</div>
                </div>
                <div className="button vertical middle">
                    <div className="bg">
                        <Middle />
                    </div>
                    <div className="icon">
                        <SuperCruise width={140} />
                    </div>
                    <div className="label">supercruise</div>
                </div>
                <div className="button vertical side flip">
                    <div className="bg">
                        <Side />
                    </div>
                    <div className="icon">
                        <Thrusters width={140} />
                    </div>
                    <div className="label">drop</div>
                </div>
            </div>
            <div className="button vertical arrow flip alarm">
                <div className="bg">
                    <Arrow />
                </div>
                <div className="icon">
                    <EmergencyDrop width={140} />
                </div>
                <div className="label">emergency drop</div>
            </div>
        </div>
    );
};

export default connector(Travel);
