import { FieldingError } from "./Error";
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
            bases: [false, false, false],
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
            bases: [false, true, true],
        },
    },
    {
        testName: "Custom Game State 1",
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, false, true],
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
            ],
            bases: [false, true, false],
        },
    },
];

describe("Triple Tests", () => {
    testCases.forEach(({ testName, input, output }) => {
        test(`${testName}`, () => {
            const error = new FieldingError();
            const { score, bases } = error.execute(input);
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
        });
    });
});
