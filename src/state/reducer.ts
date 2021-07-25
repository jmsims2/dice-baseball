import { GameState } from "./createGame";
import {
    Single,
    Double,
    Triple,
    HomeRun,
    Out,
    FieldingError,
    Ball,
    Strike,
    Walk,
} from "../actions";
import { matchDice } from "../game/dice";

export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type PitchDice = DiceRoll;
export type BatterDice = [DiceRoll, DiceRoll];

export type GameAction = {
    type: PitchDice | BatterDice;
};

const single = new Single();
const double = new Double();
const triple = new Triple();
const homer = new HomeRun();
const out = new Out();
const error = new FieldingError();
const ball = new Ball();
const strike = new Strike();
const walk = new Walk();

export const gameStateReducer = (state: GameState, action: GameAction) => {
    switch (true) {
        case action.type === 1:
        case action.type === 3:
        case action.type === 5:
            return { ...state, ...strike.execute(state) };
        case action.type === 2:
        case action.type === 4:
        case action.type === 6:
            return { ...state, ...ball.execute(state) };
        case matchDice(action.type as BatterDice, [1, 1]):
            return {
                ...state,
                ...double.execute(state, { basesToAdvance: 2 }),
            };
        case matchDice(action.type as BatterDice, [1, 2]):
            return {
                ...state,
                ...out.execute(state, { outs: 2 }),
            };
        case matchDice(action.type as BatterDice, [1, 3]):
            return { ...state, ...walk.execute(state) };
        case matchDice(action.type as BatterDice, [1, 4]):
            return {
                ...state,
                ...single.execute(state, { basesToAdvance: 1 }),
            };
        case matchDice(action.type as BatterDice, [1, 5]):
            return {
                ...state,
                ...out.execute(state, { outs: 2 }),
            };
        case matchDice(action.type as BatterDice, [1, 6]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [2, 2]):
            return {
                ...state,
                ...double.execute(state, { basesToAdvance: 3 }),
            };
        case matchDice(action.type as BatterDice, [2, 3]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [2, 4]):
            return {
                ...state,
                ...single.execute(state, { basesToAdvance: 2 }),
            };
        case matchDice(action.type as BatterDice, [2, 5]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [2, 6]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [3, 3]):
            return {
                ...state,
                ...triple.execute(state),
            };
        case matchDice(action.type as BatterDice, [3, 4]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [3, 5]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [3, 6]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [4, 4]):
            return {
                ...state,
                ...error.execute(state),
            };
        case matchDice(action.type as BatterDice, [4, 5]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [4, 6]):
            return {
                ...state,
                ...out.execute(state, { rbi: true }),
            };
        case matchDice(action.type as BatterDice, [5, 5]):
            return {
                ...state,
                ...single.execute(state, { basesToAdvance: 1 }),
            };
        case matchDice(action.type as BatterDice, [5, 6]):
            return {
                ...state,
                ...out.execute(state, { outs: 1 }),
            };
        case matchDice(action.type as BatterDice, [6, 6]):
            return {
                ...state,
                ...homer.execute(state),
            };
        default:
            throw new Error(`WTF?? No action for ${action.type}`);
    }
};
