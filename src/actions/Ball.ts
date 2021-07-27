import { Walk } from "./Walk";
import { Balls, GameState } from "../state/createGame";

const walk = new Walk();

export class Ball {
    BALL = "BALL";
    execute = (state: GameState): GameState => {
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
