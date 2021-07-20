export enum PitchResult {
    STRIKE,
    BALL,
}

export enum BatResult {
    SINGLE,
    DOUBLE,
    TRIPLE,
    HOME_RUN,
    GROUND_OUT,
    STRIKE_OUT,
    HIT_BY_PITCH,
    POP_OUT,
    ERROR,
    FLY_OUT
}



export const pitch = (dice: number) => {
    switch (dice) {
        case 1:
        case 3:
        case 5:
            return PitchResult.STRIKE;
        case 2:
        case 4:
        case 6:
            return PitchResult.BALL;
    }
};
