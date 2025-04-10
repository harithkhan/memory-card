import headerIcon from "../../assets/header-icon.png";
import "../../styles/Header.css";
import { useState } from "react";

export default function Header() {
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    return (
        <header>
            <div className="header-left">
                <img
                    src={headerIcon}
                    className="header-icon"
                    alt="Picture of Spongebob"
                />
                <div className="title-container">
                    <h1 className="title-one">Spongebob Characters</h1>
                    <h1 className="title-two">Memory Game</h1>
                </div>
            </div>
            <div className="score-container">
                <h2>Score: {score}</h2>
                <h2>Highscore: {highscore}</h2>
            </div>
        </header>
    );
}
