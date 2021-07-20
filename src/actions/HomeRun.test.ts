import { HomeRun } from "./HomeRun";
import { GameState, createGameState } from "../state/createGame";

const testCases: { testName: string; input: GameState; output: GameState }[] = [
    {
        testName: "Default Game State",
        input: createGameState({}),
        output: {
            homeTeam: { name: "Home Team", type: "home", index: 1 },
            awayTeam: { name: "Away Team", type: "away", index: 0 },
            score: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [false, false, false],
            activeTeam: 0,
            currentInning: 0,
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
            homeTeam: { name: "Home Team", type: "home", index: 1 },
            awayTeam: { name: "Away Team", type: "away", index: 0 },
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 3, 0, 0, 0, 0],
            ],
            bases: [false, false, false],
            activeTeam: 1,
            currentInning: 4,
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
