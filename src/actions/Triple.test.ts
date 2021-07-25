import { Triple } from "./Triple";
import { createGameState } from "../state/createGame";
import { BatterActionConfig } from "./types";

const testCases = [
    {
        testName: "Default Game State",
        input: createGameState(),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [false, false, true],
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
                [0, 0, 0, 0, 2, 0, 0, 0, 0],
            ],
            bases: [false, false, true],
        },
    },
    {
        testName: "Custom Game State 1",
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, false, false],
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
            ],
            bases: [false, false, true],
        },
    },
];

describe("Triple Tests", () => {
    testCases.forEach(({ testName, input, output }) => {
        test(`${testName}`, () => {
            const triple = new Triple();
            const { score, bases } = triple.execute(input);
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
        });
    });
});
