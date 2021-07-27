import { BatterActionConfig } from "./types";
import { Score, Bases, Hits, GameState } from "../state/createGame";

export class Double {
    DOUBLE = "DOUBLE";
    execute = (
        state: GameState,
        { basesToAdvance = 2 }: BatterActionConfig = {}
    ): GameState => {
        const score = this.setScore(state, basesToAdvance);
        const bases: Bases = this.setBases(state, basesToAdvance);
        const hits = this.setHits(state);
        return {
            ...state,
            score,
            bases,
            lastResult: this.DOUBLE,
            strikes: 0,
            balls: 0,
            currentTurn: "pitcher",
            hits,
        };
    };

    setHits = (state: GameState): Hits => {
        let hits = [...state.hits];
        hits[state.activeTeam] = hits[state.activeTeam] + 1;
        return hits as Hits;
    };

    setScore = (state: GameState, basesToAdvance: number): Score => {
        let score = [...state.score];
        let runs = 0;
        if (basesToAdvance === 2) {
            runs = state.bases[1] ? runs + 1 : runs;
            runs = state.bases[2] ? runs + 1 : runs;
        } else {
            runs = state.bases.filter(Boolean).length;
        }
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };

    setBases = (state: GameState, basesToAdvance: number): Bases => {
        let bases = [...state.bases];
        if (basesToAdvance === 2) {
            return bases[0] ? [false, true, true] : [false, true, false];
        } else {
            return [false, true, false];
        }
    };
}
