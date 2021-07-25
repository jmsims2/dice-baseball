import { BatterActionConfig, HitArgs, HitResult } from "./types";
import { Score, Bases } from "../state/createGame";

export class Single {
    execute = (
        state: HitArgs,
        { basesToAdvance = 1 }: BatterActionConfig = {}
    ): HitResult => {
        const score = this.setScore(state, basesToAdvance);
        const bases: Bases = this.setBases(state, basesToAdvance);
        return { ...state, score, bases };
    };

    setScore = (state: HitArgs, basesToAdvance: number): Score => {
        let score = [...state.score];
        let runs = 0;
        if (basesToAdvance === 2) {
            runs = state.bases[1] ? runs + 1 : runs;
            runs = state.bases[2] ? runs + 1 : runs;
        } else {
            runs = state.bases[2] ? runs + 1 : runs;
        }
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };

    setBases = (state: HitArgs, basesToAdvance: number): Bases => {
        let bases = [...state.bases];
        if (basesToAdvance === 2) {
            return bases[0] ? [true, false, true] : [true, false, false];
        } else {
            return [true, bases[0], bases[1]];
        }
    };
}
