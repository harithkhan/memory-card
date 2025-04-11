import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);
    const [cardMemory, setCardMemory] = useState([]);

    function increaseScore() {
        setScore((score) => score + 1);
    }

    function handleCardClick(id) {
        if (cardMemory.length === 0) {
            setCardMemory([id]);
            increaseScore();
            return;
        } else if (!cardMemory.includes(id)) {
            setCardMemory([...cardMemory, id]);
            increaseScore();
        } else if (cardMemory.includes(id)) {
            setScore(0);
            setCardMemory([]);
            return;
        }
    }
    return (
        <>
            <Header score={score} />
            <Main onCardClick={handleCardClick} />
        </>
    );
}

export default App;
