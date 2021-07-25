import { Strike } from "./Strike";
import { createGameState } from "../state/createGame";
import { PitchResult } from "./types";

const testCases = [
    {
        testName: "Default Game State",
        input: createGameState(),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [false, false, false],
            strikes: 1,
            currentTurn: "batter",
            outs: 0,
        },
    },
    {
        testName: "Custom Game State 2",
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, false],
            strikes: 2,
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [true, true, false],
            strikes: 0,
            currentTurn: "pitcher",
            outs: 1,
        },
    },
];

describe("Strike Tests", () => {
    testCases.forEach(({ testName, input, output }) => {
        test(`${testName}`, () => {
            const strike = new Strike();
            const { currentTurn, outs, strikes } = strike.execute(
                input
            ) as PitchResult;
            expect(currentTurn).toBe(output.currentTurn);
            expect(outs).toBe(output.outs);
            expect(strikes).toBe(output.strikes);
        });
    });
});
