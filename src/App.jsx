import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Game from "./Components/Game.jsx";

function App() {
    return (
        <div className="App">
            <h1>Tres en Raya</h1>
            <Game />
        </div>
    );
}

export default App;
