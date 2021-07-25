import { Out } from "./Out";
import { createGameState } from "../state/createGame";
import { BatterActionConfig } from "./types";

const testCases = [
    {
        testName: "Default Game State",
        args: {},
        input: createGameState(),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [false, false, false],
            activeTeam: 0,
            currentInning: 0,
            outs: 1,
        },
    },
    {
        testName: "Custom Game State 1",
        args: { rbi: false },
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, false],
            outs: 2,
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [false, false, false],
            outs: 0,
            currentInning: 5,
            activeTeam: 0,
        },
    },
    {
        testName: "Custom Game State 2",
        args: { outs: 2 },
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, false],
            outs: 0,
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            bases: [true, true, false],
            currentInning: 4,
            activeTeam: 1,
            outs: 2,
        },
    },
    {
        testName: "Custom Game State 3",
        args: { rbi: true },
        input: createGameState({
            currentInning: 4,
            activeTeam: 1,
            bases: [true, true, true],
            outs: 0,
        }),
        output: {
            score: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
            ],
            bases: [true, true, false],
            currentInning: 4,
            activeTeam: 1,
            outs: 1,
        },
    },
];

describe("Single Tests", () => {
    testCases.forEach(({ testName, args, input, output }) => {
        test(`${testName}`, () => {
            const out = new Out();
            const { score, bases, currentInning, activeTeam, outs } =
                out.execute(input, args as BatterActionConfig);
            expect(score).toMatchObject(output.score);
            expect(bases).toMatchObject(output.bases);
            expect(currentInning).toBe(output.currentInning);
            expect(activeTeam).toBe(output.activeTeam);
            expect(outs).toBe(output.outs);
        });
    });
});
