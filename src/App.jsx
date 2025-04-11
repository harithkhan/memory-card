import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);
    const [currentCard, setCurrentCard] = useState(undefined);

    function increaseScore() {
        setScore((score) => score + 1);
    }

    function handleCardClick(id) {
        if (!currentCard) {
            setCurrentCard(id);
            increaseScore();
            return;
        } else if (currentCard !== id) {
            increaseScore();
        } else if (currentCard === id) {
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
