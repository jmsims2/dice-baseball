import { PitchArgs, PitchResult, HitResult } from "./types";
import { Out } from "./Out";
import { Strikes } from "../state/createGame";

const out = new Out();

export class Strike {
    STRIKE = "STRIKE";
    execute = (state: PitchArgs): PitchResult | HitResult => {
        return state.strikes < 2
            ? {
                  ...state,
                  lastResult: this.STRIKE,
                  strikes: (state.strikes + 1) as Strikes,
                  currentTurn: "batter",
              }
            : out.execute(state, { outs: 1 });
    };
}
