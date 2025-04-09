import headerIcon from "../../assets/header-icon.png";
import "../../styles/Header.css";

export default function Header() {
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
                <h2>Score: 0</h2>
                <h2>Highscore: 0</h2>
            </div>
        </header>
    );
}
