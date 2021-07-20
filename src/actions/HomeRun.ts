import { BatterAction } from "./types";
import { GameState, Score, Bases } from "../state/createGame";

export class HomeRun implements BatterAction {
    execute = (state: GameState) => {
        const score = this.setScore(state);
        const bases: Bases = [false, false, false];
        return { ...state, score, bases };
    };

    setScore = (state: GameState): Score => {
        let score = [...state.score];
        const runs = state.bases.filter(Boolean).length + 1;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };
}
