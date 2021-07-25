import { BatterDice } from "../state/reducer";

export const rollDice = () => Math.floor(Math.random() * 6) + 1;

export const matchDice = (roll: BatterDice, toMatch: BatterDice) =>
    roll.every((num) => toMatch.includes(num));
