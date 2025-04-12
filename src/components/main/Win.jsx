import "../../styles/Win.css";
import winImage from "../../assets/win-picture.png";

export default function Win({ onClick }) {
    return (
        <dialog className="win-dialog">
            <img src={winImage} className="win-image" alt="" />
            <h2>You won the game!</h2>
            <button className="restart-button" onClick={onClick}>
                Restart
            </button>
        </dialog>
    );
}
