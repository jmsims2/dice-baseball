import { GameState } from "../state/createGame";

export interface BatterActionConfig {
    basesToAdvance?: 1 | 2 | 3;
    outs?: 1 | 2;
    rbi?: true | false;
}

export type HitArgs = Pick<
    GameState,
    "score" | "bases" | "currentInning" | "activeTeam"
>;
export type HitResult = Pick<GameState, "score" | "bases">;

export type OutArgs = Pick<
    GameState,
    "score" | "bases" | "currentInning" | "activeTeam" | "outs"
>;
export type OutResult = Pick<
    GameState,
    "score" | "bases" | "currentInning" | "activeTeam" | "outs"
>;
