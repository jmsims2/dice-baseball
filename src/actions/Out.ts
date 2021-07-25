import { BatterActionConfig, OutArgs, OutResult } from "./types";
import { Score, Bases, Outs } from "../state/createGame";
import { createSecureContext } from "tls";

export class Out {
    OUT = "OUT";
    DOUBLEPLAY = "DOUBLE PLAY";
    execute = (
        state: OutArgs,
        { outs = 1, rbi = false }: BatterActionConfig
    ): OutResult => {
        const newOuts: Outs = this.setOuts(state, outs);
        const score = this.setScore(state, rbi);
        const bases: Bases = this.setBases(state, newOuts < state.outs, rbi);
        const activeTeam = this.setActiveTeam(state, newOuts < state.outs);
        const currentInning =
            state.activeTeam === activeTeam
                ? state.currentInning
                : activeTeam === 0
                ? state.currentInning + 1
                : state.currentInning;
        if (currentInning + 1 > score[0].length) {
            score[0].push(0);
            score[1].push(0);
        }
        return {
            ...state,
            score,
            bases,
            outs: newOuts,
            activeTeam,
            currentInning,
            lastResult: outs === 2 ? this.DOUBLEPLAY : this.OUT,
        };
    };

    setBases = (state: OutArgs, newInning: boolean, rbi: boolean): Bases => {
        if (newInning) return [false, false, false];
        return rbi ? [state.bases[0], state.bases[1], false] : state.bases;
    };

    setActiveTeam = (state: OutArgs, newInning: boolean) => {
        return newInning ? (state.activeTeam ? 0 : 1) : state.activeTeam;
    };

    setOuts = (state: OutArgs, outs = 1): Outs => {
        return (state.outs + outs > 2 ? 0 : state.outs + outs) as Outs;
    };

    setScore = (state: OutArgs, rbi: boolean): Score => {
        let score = [...state.score];
        let runs = rbi && state.bases[2] ? 1 : 0;
        score[state.activeTeam][state.currentInning] += runs;
        return score;
    };
}
