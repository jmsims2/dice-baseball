import React from "react";
import { Bases } from "./../../state/createGame";
import "./Bases.css";

type BasesProps = {
    bases: Bases;
};

export function BasesIndicator({ bases }: BasesProps) {
    return (
        <div
            id="bases"
            style={{
                margin: 5,
                height: 40,
                width: 40,
                transform: "rotate(45deg)",
                border: "1px solid white",
            }}
        >
            <div
                className={["top", "left", bases[1] ? "on-base" : undefined]
                    .filter(Boolean)
                    .join(" ")}
            ></div>
            <div
                className={["top", "right", bases[0] ? "on-base" : undefined]
                    .filter(Boolean)
                    .join(" ")}
            ></div>
            <div
                className={["bottom", "left", bases[2] ? "on-base" : undefined]
                    .filter(Boolean)
                    .join(" ")}
            ></div>
            <div className="bottom right"></div>
        </div>
    );
}
