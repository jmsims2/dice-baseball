import { GameState } from "../state/createGame";

export interface BatterActionConfig {
    basesToAdvance?: 1 | 2 | 3;
    outs?: 1 | 2;
}

export interface BatterAction {
    execute: (
        state: GameState,
        config: BatterActionConfig | undefined
    ) => GameState;
}
