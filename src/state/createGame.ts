type TeamType = "home" | "away";

export interface Team {
    name: string;
    type: TeamType;
    index: 0 | 1;
}

export type Score = Array<number[]>;

export type Bases = [boolean, boolean, boolean];

export type Outs = 0 | 1 | 2;

export type Balls = 0 | 1 | 2 | 3;
export type Strikes = 0 | 1 | 2;

export interface GameState {
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
    bases: Bases;
    activeTeam: 0 | 1;
    currentInning: number;
    outs: Outs;
    balls: Balls,
    strikes: Strikes;
    lastResult: string | null;
}

export const createGameState = ({
    homeTeam = { name: "Home Team", type: "home", index: 1 },
    awayTeam = { name: "Away Team", type: "away", index: 0 },
    score = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    bases = [false, false, false],
    activeTeam = 0,
    currentInning = 0,
    outs = 0,
    balls = 0,
    strikes = 0,
    lastResult = null,
}: Partial<GameState> = {}): GameState => {
    return {
        homeTeam,
        awayTeam,
        score,
        bases,
        activeTeam,
        currentInning,
        outs,
        balls,
        strikes
        lastResult,
    };
};
