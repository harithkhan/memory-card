import "../../styles/Main.css";
import Cards from "./Cards";

export default function Main({ onCardClick }) {
    return (
        <main>
            <h3 className="instructions">
                Click on unique character to accumulate score. Duplicates will
                reset your progress. See if you can reach the max score of 20!
            </h3>
            <Cards onCardClick={onCardClick} />
        </main>
    );
}
