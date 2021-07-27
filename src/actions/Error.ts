import { Score, Bases, Errors, GameState } from "../state/createGame";

export class FieldingError {
    ERROR = "ERROR";
    execute = (state: GameState): GameState => {
        const score = this.setScore(state);
        const bases: Bases = this.setBases(state);
        const errors = this.setErrors(state);
        return {
            ...state,
            score,
            bases,
            lastResult: this.ERROR,
            strikes: 0,
            balls: 0,
            currentTurn: "pitcher",
            errors,
        };
    };

    setErrors = (state: GameState): Errors => {
        let errors = { ...state.errors };
        errors[state.activeTeam] = errors[state.activeTeam] + 1;
        return errors as Errors;
    };

    setScore = (state: GameState): Score => {
        let score = [...state.score];
        let runs = state.bases[2] ? 1 : 0;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };

    setBases = (state: GameState): Bases => {
        return [false, state.bases[0], state.bases[1]];
    };
}
