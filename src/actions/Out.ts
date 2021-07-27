import { BatterActionConfig } from "./types";
import { Score, Bases, Outs, GameState } from "../state/createGame";

export class Out {
    OUT = "OUT";
    DOUBLEPLAY = "DOUBLE PLAY";
    execute = (
        state: GameState,
        { outs = 1, rbi = false }: BatterActionConfig
    ): GameState => {
        const newOuts: Outs = this.setOuts(state, outs);
        const score = this.setScore(state, rbi);
        const bases: Bases = this.setBases(state, newOuts < state.outs, rbi);
        let gameOver = false;
        let lastResult = this.OUT;
        let activeTeam = state.activeTeam;
        let currentInning = state.currentInning;
        if (
            currentInning >= 8 &&
            newOuts === 0 &&
            activeTeam === 1 &&
            !this.isTied(state)
        ) {
            console.log("game over", currentInning);
            gameOver = true;
            const home = state.score[1].reduce((sum, runs) => sum + runs, 0);
            const away = state.score[0].reduce((sum, runs) => sum + runs, 0);
            lastResult = `GAME OVER: ${
                home > away ? "Home Team Wins" : "Away Team Wins"
            } ${home > away ? `${home} - ${away}` : `${away} - ${home}`}`;
        }
        if (!gameOver) {
            activeTeam = this.setActiveTeam(state, newOuts < state.outs);
            currentInning =
                state.activeTeam === activeTeam
                    ? state.currentInning
                    : activeTeam === 0
                    ? state.currentInning + 1
                    : state.currentInning;
            if (currentInning + 1 > score[0].length) {
                score[0].push(0);
                score[1].push(0);
            }
        }
        return {
            ...state,
            score,
            bases,
            outs: newOuts,
            activeTeam,
            currentInning,
            lastResult,
            strikes: 0,
            balls: 0,
            currentTurn: "pitcher",
            gameOver,
        };
    };

    isTied = (state: GameState): boolean => {
        return (
            state.score[0].reduce((sum, runs) => sum + runs, 0) ===
            state.score[1].reduce((sum, runs) => sum + runs, 0)
        );
    };

    setBases = (state: GameState, newInning: boolean, rbi: boolean): Bases => {
        if (newInning) return [false, false, false];
        return rbi ? [state.bases[0], state.bases[1], false] : state.bases;
    };

    setActiveTeam = (state: GameState, newInning: boolean) => {
        return newInning ? (state.activeTeam ? 0 : 1) : state.activeTeam;
    };

    setOuts = (state: GameState, outs = 1): Outs => {
        return (state.outs + outs > 2 ? 0 : state.outs + outs) as Outs;
    };

    setScore = (state: GameState, rbi: boolean): Score => {
        let score = [...state.score];
        let runs = rbi && state.bases[2] ? 1 : 0;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };
}
