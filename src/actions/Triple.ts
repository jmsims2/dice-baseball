import { HitArgs, HitResult } from "./types";
import { Score, Bases } from "../state/createGame";

export class Triple {
    TRIPLE = "TRIPLE";
    execute = (state: HitArgs): HitResult => {
        const score = this.setScore(state);
        const bases: Bases = this.setBases(state);
        return { ...state, score, bases, lastResult: this.TRIPLE };
    };

    setScore = (state: HitArgs): Score => {
        let score = [...state.score];
        let runs = state.bases.filter(Boolean).length;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };

    setBases = (state: HitArgs): Bases => {
        return [false, false, true];
    };
}
