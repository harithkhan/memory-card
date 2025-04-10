import "../../styles/Main.css";
import Cards from "./Cards";

export default function Main() {
    return (
        <main>
            <h3 className="instructions">
                Click on unique character to accumulate score. Duplicates will
                reset your progress.
            </h3>
            <Cards />
        </main>
    );
}
