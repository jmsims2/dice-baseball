import { rollDice, matchDice } from "./dice";

const matchDiceTests: {
    input: [[number, number], [number, number]];
    output: boolean;
}[] = [
    {
        input: [
            [1, 2],
            [1, 2],
        ],
        output: true,
    },
    {
        input: [
            [2, 1],
            [1, 2],
        ],
        output: true,
    },
    {
        input: [
            [1, 2],
            [3, 5],
        ],
        output: false,
    },
];

describe("Dice Roll Tests", () => {
    it("should roll dice with values between 1 and 6", () => {
        for (let i = 0; i < 10; i++) {
            const die = rollDice();
            expect(die).toBeGreaterThanOrEqual(1);
            expect(die).toBeLessThanOrEqual(6);
        }
    });

    matchDiceTests.forEach(({ input, output }) => {
        it(`should evaluate ${input} to be ${output}`, () => {
            expect(matchDice(...input)).toBe(output);
        });
    });
});
