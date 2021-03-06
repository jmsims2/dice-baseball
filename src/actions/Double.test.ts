import { Double } from "./Double";
import { GameState, createGameState } from "../state/createGame";
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
            bases: [false, true, false],
        },
    },
    {
        testName: "Custom Game State 2",
        basesToAdvance: 3,
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, false],
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0, 0, 0],
            ],
            bases: [false, true, false],
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
            bases: [false, true, true],
        },
    },
];

describe("Double Tests", () => {
    testCases.forEach(({ testName, basesToAdvance, input, output }) => {
        test(`${testName}`, () => {
            const dub = new Double();
            const { score, bases } = dub.execute(input, {
                basesToAdvance,
            } as BatterActionConfig);
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
        });
    });
});
