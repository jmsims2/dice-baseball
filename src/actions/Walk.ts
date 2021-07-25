import { HitArgs, HitResult } from "./types";
import { Score, Bases } from "../state/createGame";

export class Walk {
    WALK = "WALK";
    execute = (state: HitArgs): HitResult => {
        const score = this.setScore(state);
        const bases: Bases = this.setBases(state);
        return {
            ...state,
            score,
            bases,
            lastResult: this.WALK,
            strikes: 0,
            balls: 0,
            currentTurn: "pitcher",
        };
    };

    setScore = (state: HitArgs): Score => {
        let score = [...state.score];
        const runs = state.bases[2] ? 1 : 0;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };

    setBases = (state: HitArgs): Bases => {
        let bases = [...state.bases];
        return [true, bases[0], bases[1]];
    };
}
