import React from "react";
import { GameState } from "../../state/createGame";
import { BoxScore, InningStats, BasesIndicator } from "./../stats";

type GameManagerProps = {
    handlePress: () => void;
    state: GameState;
};

export function GameManager({ handlePress, state }: GameManagerProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "black",
                opacity: "0.8",
                margin: "auto",
                height: "75vh",
                width: "75vw",
                color: "white",
            }}
        >
            <div
                style={{
                    margin: 5,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "33%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <BoxScore
                        homeTeam={state.homeTeam.name}
                        awayTeam={state.awayTeam.name}
                        score={state.score}
                        hits={state.hits}
                        errors={state.errors}
                    />
                </div>
                <div
                    style={{
                        width: "33%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <BasesIndicator bases={state.bases} />
                </div>
                <div
                    style={{
                        width: "33%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <InningStats
                        inning={state.currentInning + 1}
                        isTop={state.activeTeam === 0}
                        balls={state.balls}
                        strikes={state.strikes}
                        outs={state.outs}
                    />
                </div>
            </div>
            <div style={{ flex: 2, margin: 20 }}>
                <button
                    onClick={handlePress}
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        height: 50,
                        width: 150,
                    }}
                >
                    {state.gameOver
                        ? "Start Over"
                        : state.currentTurn === "pitcher"
                        ? "Throw Pitch"
                        : "Take Swing"}
                </button>
            </div>
            <div style={{ flex: 1, margin: 20, fontSize: 30 }}>
                <div>{state.lastResult || ""}</div>
            </div>
        </div>
    );
}
