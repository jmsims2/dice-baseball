export const rollDice = () => Math.floor(Math.random() * 6) + 1;

export const matchDice = (roll: [number, number], toMatch: [number, number]) =>
    roll.every((num) => toMatch.includes(num));
