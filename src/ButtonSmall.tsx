import React, { FC } from "react";
import { ReactComponent as SmallButtonBothSidedActive } from "./static/SVG/btn_sm_both_active.svg";
import { ReactComponent as SmallButtonBothSidedNormal } from "./static/SVG/btn_sm_both_normal.svg";
import { ReactComponent as SmallButtonRightSidedActive } from "./static/SVG/btn_sm_right_active.svg";
import { ReactComponent as SmallButtonRightSidedAlarmActive } from "./static/SVG/btn_sm_right_alarm_active.svg";
import { ReactComponent as SmallButtonRightSidedAlarmNormal } from "./static/SVG/btn_sm_right_alarm_normal.svg";
import { ReactComponent as SmallButtonRightSidedNormal } from "./static/SVG/btn_sm_right_normal.svg";

export enum Side {
    Left,
    Right,
    Both,
}

interface Props {
    side: Side;
    alarm?: boolean;
    title: string;
    status: string;
    active: boolean;
    onClick?: () => void;
}

const ButtonSmall: FC<Props> = ({ side, children, title, status, alarm, active, onClick }) => {
    const sideClass: string = side === Side.Left ? "left" : side === Side.Right ? "right" : "both";
    return (
        <div
            className={`button small ${sideClass} normal ${active ? "active" : ""} ${alarm ? "alarm" : ""}`}
            onPointerDown={onClick}
        >
            <div className="btn-bg">
                <div className="normal">
                    {!alarm && (side === Side.Both ? <SmallButtonBothSidedNormal /> : <SmallButtonRightSidedNormal />)}
                    {alarm && <SmallButtonRightSidedAlarmNormal />}
                </div>
                <div className="active">
                    {!alarm && (side === Side.Both ? <SmallButtonBothSidedActive /> : <SmallButtonRightSidedActive />)}
                    {alarm && <SmallButtonRightSidedAlarmActive />}
                </div>
            </div>
            <div className="btn-label">
                <div className="btn-icon">{children}</div>
                <div className="btn-title">{title}</div>
                <div className="btn-separator"></div>
                <div className="btn-status">{status}</div>
            </div>
        </div>
    );
};

export default ButtonSmall;
