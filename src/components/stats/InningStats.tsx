import React from "react";

type InningProps = {
    inning: number;
    isTop: boolean;
    balls: number;
    strikes: number;
    outs: number;
};

export function InningStats({
    inning,
    isTop,
    balls,
    strikes,
    outs,
}: InningProps) {
    return (
        <div>
            <div>{`${isTop ? "Top" : "Bottom"} ${inning}`}</div>
            <div>{`B: ${balls}`}</div>
            <div>{`S: ${strikes}`}</div>
            <div>{`${outs} Outs`}</div>
        </div>
    );
}
