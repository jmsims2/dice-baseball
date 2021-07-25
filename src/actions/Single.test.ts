import { Single } from "./Single";
import { createGameState } from "../state/createGame";
import { BatterActionConfig } from "./types";

const testCases = [
    {
        testName: "Default Game State",
        basesToAdvance: 2,
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
        basesToAdvance: 1,
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
        basesToAdvance: 2,
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, false],
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
            ],
            bases: [true, false, true],
        },
    },
];

describe("Single Tests", () => {
    testCases.forEach(({ testName, basesToAdvance, input, output }) => {
        test(`${testName}`, () => {
            const single = new Single();
            const { score, bases } = single.execute(input, {
                basesToAdvance,
            } as BatterActionConfig);
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
        });
    });
});
