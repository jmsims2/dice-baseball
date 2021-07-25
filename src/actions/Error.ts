import { HitArgs, HitResult } from "./types";
import { Score, Bases } from "../state/createGame";

export class FieldingError {
    execute = (state: HitArgs): HitResult => {
        const score = this.setScore(state);
        const bases: Bases = this.setBases(state);
        return { ...state, score, bases };
    };

    setScore = (state: HitArgs): Score => {
        let score = [...state.score];
        let runs = state.bases[2] ? 1 : 0;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };

    setBases = (state: HitArgs): Bases => {
        return [false, state.bases[0], state.bases[1]];
    };
}
