import { GameState } from "../state/createGame";

export interface BatterActionConfig {
    basesToAdvance?: 1 | 2 | 3;
    outs?: 1 | 2;
    rbi?: true | false;
}

export type HitArgs = Pick<
    GameState,
    | "score"
    | "bases"
    | "currentInning"
    | "activeTeam"
    | "balls"
    | "strikes"
    | "currentTurn"
    | "hits"
    | "errors"
>;
export type HitResult = Pick<
    GameState,
    | "score"
    | "bases"
    | "lastResult"
    | "balls"
    | "strikes"
    | "currentInning"
    | "currentTurn"
    | "hits"
    | "errors"
>;

export type OutArgs = Pick<
    GameState,
    | "score"
    | "bases"
    | "currentInning"
    | "activeTeam"
    | "outs"
    | "balls"
    | "strikes"
    | "currentTurn"
>;
export type OutResult = Pick<
    GameState,
    | "score"
    | "bases"
    | "currentInning"
    | "activeTeam"
    | "outs"
    | "lastResult"
    | "balls"
    | "strikes"
    | "currentTurn"
>;

export type PitchArgs = Pick<
    GameState,
    | "score"
    | "bases"
    | "currentInning"
    | "activeTeam"
    | "outs"
    | "lastResult"
    | "strikes"
    | "balls"
    | "currentTurn"
>;
export type PitchResult = Pick<
    GameState,
    | "score"
    | "bases"
    | "currentInning"
    | "activeTeam"
    | "outs"
    | "lastResult"
    | "strikes"
    | "balls"
    | "currentTurn"
>;
