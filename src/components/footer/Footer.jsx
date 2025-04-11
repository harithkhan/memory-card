import "../../styles/Footer.css";
import githubIcon from "../../assets/github-icon.png";

export default function Footer() {
    return (
        <footer>
            <div className="credit">
                Created by
                <a href="https://github.com/harithkhan">Harith Khan</a>
                <img src={githubIcon} />
            </div>
        </footer>
    );
}
