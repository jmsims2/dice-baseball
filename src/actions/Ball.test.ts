import { Ball } from "./Ball";
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
            balls: 1,
        },
    },
    {
        testName: "Custom Game State 2",
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, false],
            balls: 2,
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [true, true, false],
            balls: 3,
        },
    },
    {
        testName: "Custom Game State 1",
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, true],
            balls: 3,
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
            ],
            bases: [true, true, true],
            balls: 0,
        },
    },
];

describe("Ball Tests", () => {
    testCases.forEach(({ testName, input, output }) => {
        test(`${testName}`, () => {
            const ball = new Ball();
            const { score, bases, balls } = ball.execute(input);
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
            expect(balls).toBe(output.balls);
        });
    });
});
