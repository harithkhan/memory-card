import "../../styles/Cards.css";
import { useEffect, useState } from "react";

const spongeOne = "iJhEhO7IhmAjS";
const spongeTwo = "bYB0rwy8SNZjq";
const spongeThree = "";
const spongeFour = "";
const spongeFive = "";
const spongeSix = "";
const spongeSeven = "";
const spongeEight = "";
const spongeNine = "";
const spongeTen = "";
const spongeEleven = "";
const spongeTwelve = "";
const spongeThirteen = "";
const spongeFourteen = "";
const spongeFifteen = "";
const spongeSixteen = "";
const spongeSeventeen = "";
const spongeEighteen = "";
const spongeNineteen = "";
const spongeTwenty = "";

function SpongeCard({ spongeId }) {
    const [gifUrl, setGifUrl] = useState("");

    useEffect(() => {
        const fetchGif = async () => {
            try {
                const apiKey = "1Yf3NuogrS4q5SoCqUV1djDyJpAEPU3j";
                const gifId = spongeId;
                const res = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`);
                const data = await res.json();
                const url = data.data.images.original.url;
                setGifUrl(url);
            } catch (err) {
                console.error("Failed to fetch gif:", err);
            }
        };
        fetchGif();
    }, []);

    return (
        <div className="card">
            {gifUrl ? <img src={gifUrl} alt="Giphy GIF" /> : <p>Loading...</p>}
        </div>
    );
}

export default function Cards() {
    return (
        <div className="cards-container">
            <SpongeCard spongeId={spongeOne} />
            <SpongeCard spongeId={spongeTwo} />
        </div>
    )
}
