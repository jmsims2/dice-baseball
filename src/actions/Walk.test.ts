import { Walk } from "./Walk";
import { createGameState } from "../state/createGame";

const testCases = [
    {
        testName: "Default Game State",
        input: createGameState(),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [true, false, false],
        },
    },
    {
        testName: "Custom Game State 2",
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, false],
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [true, true, true],
        },
    },
    {
        testName: "Custom Game State 1",
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, true],
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
            ],
            bases: [true, true, true],
        },
    },
];

describe("Single Tests", () => {
    testCases.forEach(({ testName, input, output }) => {
        test(`${testName}`, () => {
            const walk = new Walk();
            const { score, bases, strikes, balls } = walk.execute(input);
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
            expect(strikes).toBe(0);
            expect(balls).toBe(0);
        });
    });
});
