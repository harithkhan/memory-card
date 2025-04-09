import headerIcon from "../../assets/header-icon.png";
import "../../styles/Header.css";

export default function Header() {
    return (
        <header>
            <img
                src={headerIcon}
                className="header-icon"
                alt="Picture of Spongebob"
            />
        </header>
    );
}
