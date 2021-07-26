import React from "react";
import { Score, Hits, Errors } from "../../state/createGame";

type BoxScoreProps = {
    homeTeam: string;
    awayTeam: string;
    score: Score;
    hits: Hits;
    errors: Errors;
};

export function BoxScore({
    homeTeam,
    awayTeam,
    score,
    hits,
    errors,
}: BoxScoreProps) {
    return (
        <div>
            <table
                style={{
                    backgroundColor: "black",
                    opacity: "0.75",
                    color: "white",
                }}
            >
                <tr>
                    <th>Team</th>
                    <th>Runs</th>
                    <th>Hits</th>
                    <th>Errors</th>
                </tr>
                <tr>
                    <td>{awayTeam}</td>
                    <td>{score[0].reduce((sum, runs) => sum + runs, 0)}</td>
                    <td>{hits[0]}</td>
                    <td>{errors[0]}</td>
                </tr>
                <tr>
                    <td>{homeTeam}</td>
                    <td>{score[1].reduce((sum, runs) => sum + runs, 0)}</td>
                    <td>{hits[1]}</td>
                    <td>{errors[1]}</td>
                </tr>
            </table>
        </div>
    );
}
