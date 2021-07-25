import { HitArgs, HitResult } from "./types";
import { Score, Bases } from "../state/createGame";

export class HomeRun {
    HOMERUN = "HOME RUN";
    execute = (state: HitArgs): HitResult => {
        const score = this.setScore(state);
        const bases: Bases = [false, false, false];
        return {
            ...state,
            score,
            bases,
            lastResult: this.HOMERUN,
            strikes: 0,
            balls: 0,
            currentTurn: "pitcher",
        };
    };

    setScore = (state: HitArgs): Score => {
        let score = [...state.score];
        const runs = state.bases.filter(Boolean).length + 1;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };
}
