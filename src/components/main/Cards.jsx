import "../../styles/Cards.css";
import { useEffect, useState } from "react";

const spongeIds = [
    "iJhEhO7IhmAjS",
    "bYB0rwy8SNZjq",
    "LSk5aGh2WYL6g",
    "9q0MGzdrjWFYk",
    "Zw8qM7qBEg6mQ",
    "aB8acJ0dByuGY",
    "SKGo6OYe24EBG",
    "3o7aCTPPm4OHfRLSH6",
    "ISOckXUybVfQ4",
    "njPdRtrrdyoVO",
    "iQ6yGuMhPGWhW",
    "10briMdj6tGzHa",
    "LdOyjZ7io5Msw",
    "l0MYAs5E2oIDCq9So",
    "UvOcKPHrkKSLm",
    "M8xmO5ZcLPtAY",
    "141kXAUyJFoBEc",
    "nrXif9YExO9EI",
    "D7z8JfNANqahW",
    "nDSlfqf0gn5g4",
];

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
            {spongeIds.map((id, index) => (
                <SpongeCard key={index} spongeId={id} />
            ))}
        </div>
    );
}
