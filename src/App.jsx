import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);

    function increaseScore() {
        setScore((score) => score + 1);
    }
    return (
        <>
            <Header score={score} />
            <Main onCardClick={increaseScore} />
        </>
    );
}

export default App;
