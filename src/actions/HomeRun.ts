import { HitArgs, HitResult } from "./types";
import { Score, Bases } from "../state/createGame";

export class HomeRun {
    HOMERUN = "HOME RUN";
    execute = (state: HitArgs): HitResult => {
        const score = this.setScore(state);
        const bases: Bases = [false, false, false];
        return { score, bases, lastResult: this.HOMERUN };
    };

    setScore = (state: HitArgs): Score => {
        let score = [...state.score];
        const runs = state.bases.filter(Boolean).length + 1;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };
}
