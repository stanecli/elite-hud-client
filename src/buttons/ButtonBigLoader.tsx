import React, { FC, useEffect, useState } from "react";
import "./ButtonBigLoader.css";
import Loader from "./Loader";

interface Props {
    className: string;
    active: boolean;
    title: string;
    loaderText?: string;
    activeText?: string;
    timeOut?: number;
    disableIfActive?: boolean;
    onClick: () => void;
}

const ButtonBigLoader: FC<Props> = (props) => {
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(props.active);
        setLoading(false);
    }, [props.active]);
    useEffect(() => {
        let timeout = -1;
        if (loading) {
            timeout = window.setTimeout(() => {
                setLoading(false);
                setActive(props.active);
            }, props.timeOut || 5000);
        }
        return () => {
            window.clearTimeout(timeout);
        };
    }, [loading, props.active, props.timeOut]);
    return (
        <div
            className={`button ${props.className} ${props.active ? "active" : ""} ${loading ? "loading" : ""}`}
            onPointerDown={() => {
                if (props.disableIfActive && active && !loading) {
                    return;
                }
                setLoading(!loading);
                setActive(!active);
                props.onClick();
            }}
        >
            {props.children}
            <div className="label">
                {(loading ? props.loaderText : active ? props.activeText : props.title) || props.title}
            </div>
            <Loader />
        </div>
    );
};

export default ButtonBigLoader;
