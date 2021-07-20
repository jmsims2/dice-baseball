import { Double } from "./Double";
import { GameState, createGameState } from "../state/createGame";

const testCases: {
    testName: string;
    basesToAdvance: 2 | 3;
    input: GameState;
    output: GameState;
}[] = [
    {
        testName: "Default Game State",
        basesToAdvance: 2,
        input: createGameState({}),
        output: {
            homeTeam: { name: "Home Team", type: "home", index: 1 },
            awayTeam: { name: "Away Team", type: "away", index: 0 },
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [false, true, false],
            activeTeam: 0,
            currentInning: 0,
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
            homeTeam: { name: "Home Team", type: "home", index: 1 },
            awayTeam: { name: "Away Team", type: "away", index: 0 },
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0, 0, 0],
            ],
            bases: [false, true, false],
            activeTeam: 1,
            currentInning: 4,
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
            homeTeam: { name: "Home Team", type: "home", index: 1 },
            awayTeam: { name: "Away Team", type: "away", index: 0 },
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
            ],
            bases: [false, true, true],
            activeTeam: 1,
            currentInning: 4,
        },
    },
];

describe("Home Run Tests", () => {
    testCases.forEach(({ testName, basesToAdvance, input, output }) => {
        test(`${testName}`, () => {
            const dub = new Double();
            const { score, bases } = dub.execute(input, { basesToAdvance });
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
        });
    });
});
