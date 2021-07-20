import { pitch, PitchResult } from "./game-logic";

const pitchTests = [
    { input: 1, output: PitchResult.STRIKE },
    { input: 2, output: PitchResult.BALL },
    { input: 3, output: PitchResult.STRIKE },
    { input: 4, output: PitchResult.BALL },
    { input: 5, output: PitchResult.STRIKE },
    { input: 6, output: PitchResult.BALL },
];

describe("Game Logic Tests", () => {
    it("should provide logic for throwing pitches", () => {
        pitchTests.forEach(({ input, output }) => {
            expect(pitch(input)).toBe(output);
        });
    });
});
