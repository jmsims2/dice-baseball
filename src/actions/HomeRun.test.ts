import { HomeRun } from "./HomeRun";
import { createGameState } from "../state/createGame";

const testCases = [
    {
        testName: "Default Game State",
        input: createGameState(),
        output: {
            score: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [false, false, false],
        },
    },
    {
        testName: "Custom Game State",
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, false],
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 3, 0, 0, 0, 0],
            ],
            bases: [false, false, false],
        },
    },
];

describe("Home Run Tests", () => {
    testCases.forEach(({ testName, input, output }) => {
        test(`${testName}`, () => {
            const homer = new HomeRun();
            const { score, bases } = homer.execute(input);
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
        });
    });
});
