import React, { FC } from "react";
import { ReactComponent as SmallButtonBothSidedActive } from "../static/SVG/btn_sm_both_active.svg";
import { ReactComponent as SmallButtonBothSidedNormal } from "../static/SVG/btn_sm_both.svg";
import { ReactComponent as SmallButtonRightSidedActive } from "../static/SVG/btn_sm_side_active.svg";
import { ReactComponent as SmallButtonRightSidedNormal } from "../static/SVG/btn_sm_side.svg";

export enum ButtonSide {
    Left,
    Right,
    Both,
}

interface Props {
    side: ButtonSide;
    active?: boolean;
    title: string;
    alarm?: boolean;
    reverse?: boolean;
    onText?: string;
    offText?: string;
    onClick?: () => void;
}

const ButtonSmall: FC<Props> = ({
    side,
    children,
    title,
    onText = "on",
    offText = "off",
    active = false,
    alarm,
    reverse,
    onClick,
}) => {
    const sideClass: string = side === ButtonSide.Left ? "left" : side === ButtonSide.Right ? "right" : "both";
    return (
        <div
            className={`button small ${sideClass} normal ${active ? "active" : ""} ${
                alarm || (reverse && active) ? "alarm" : ""
            }`}
            onPointerDown={onClick}
        >
            <div className="btn-bg">
                <div className="normal">
                    {side === ButtonSide.Both ? <SmallButtonBothSidedNormal /> : <SmallButtonRightSidedNormal />}
                </div>
                <div className="active">
                    {side === ButtonSide.Both ? <SmallButtonBothSidedActive /> : <SmallButtonRightSidedActive />}
                </div>
            </div>
            <div className="btn-label">
                <div className="btn-icon">{children}</div>
                <div className="btn-title">{title}</div>
                <div className="btn-separator"></div>
                <div className="btn-status">{active ? (reverse ? offText : onText) : reverse ? onText : offText}</div>
            </div>
        </div>
    );
};

export default ButtonSmall;
