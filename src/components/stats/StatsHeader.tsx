import React from "react";

export function StatsHeader({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                margin: "5px",
            }}
        >
            {children}
        </div>
    );
}
