import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Win from "./components/main/Win";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);
    const [cardMemory, setCardMemory] = useState([]);
    const [highscore, setHighscore] = useState(0);

    function handleCardClick(id) {
        if (cardMemory.includes(id)) {
            setScore(0);
            setCardMemory([]);
            return;
        }

        const newScore = score + 1;
        setScore(newScore);
        if (newScore > highscore) {
            setHighscore(newScore);
        }

        setCardMemory([...cardMemory, id]);
    }

    function restartGame() {
        const dialog = document.querySelector(".win-dialog");
        dialog.close();
        setScore(0);
        setCardMemory([]);
    }

    return (
        <>
            <Header score={score} highscore={highscore} />
            <Main onCardClick={handleCardClick} />
            {score >= 20 && <Win onClick={restartGame} />}
            <Footer />
        </>
    );
}

export default App;
