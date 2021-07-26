import React from "react";
import "./App.css";
import { gameStateReducer, PitchDice, BatterDice } from "./state/reducer";
import { createGameState } from "./state/createGame";
import { rollDice } from "./game/dice";
import { GameManager } from "./components/GameManager";

function App() {
    const [state, dispatch] = React.useReducer(
        gameStateReducer,
        createGameState()
    );

    function handlePress() {
        const dice =
            state.currentTurn === "pitcher"
                ? rollDice()
                : [rollDice(), rollDice()];
        if (Array.isArray(dice)) {
            dispatch({ type: dice as BatterDice });
        } else {
            dispatch({ type: dice as PitchDice });
        }
    }

    return (
        <div className="App">
            <GameManager handlePress={handlePress} state={state} />
        </div>
    );
}

export default App;
