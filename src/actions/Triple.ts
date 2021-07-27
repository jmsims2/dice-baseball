import { Score, Bases, Hits, GameState } from "../state/createGame";

export class Triple {
    TRIPLE = "TRIPLE";
    execute = (state: GameState): GameState => {
        const score = this.setScore(state);
        const bases: Bases = this.setBases(state);
        const hits = this.setHits(state);
        return {
            ...state,
            score,
            bases,
            lastResult: this.TRIPLE,
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

    setScore = (state: GameState): Score => {
        let score = [...state.score];
        let runs = state.bases.filter(Boolean).length;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };

    setBases = (state: GameState): Bases => {
        return [false, false, true];
    };
}
