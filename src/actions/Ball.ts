import { PitchArgs, PitchResult, HitResult } from "./types";
import { Walk } from "./Walk";
import { Balls } from "../state/createGame";

const walk = new Walk();

export class Ball {
    BALL = "BALL";
    execute = (state: PitchArgs): PitchResult | HitResult => {
        return state.balls < 3
            ? {
                  ...state,
                  lastResult: this.BALL,
                  balls: (state.balls + 1) as Balls,
                  currentTurn: "pitcher",
              }
            : walk.execute(state);
    };
}
