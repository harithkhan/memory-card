import "../../styles/Cards.css";
import { useEffect, useState } from "react";

function SpongeOne() {
    const [gifUrl, setGifUrl] = useState("");

    useEffect(() => {
        const fetchGif = async () => {
            try {
                const apiKey = "1Yf3NuogrS4q5SoCqUV1djDyJpAEPU3j";
                const gifId = "iJhEhO7IhmAjS";
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
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            {gifUrl ? <img src={gifUrl} alt="Giphy GIF" /> : <p>Loading...</p>}
        </div>
    );
}

export default function Cards() {
    return (
        <SpongeOne />
    )
}
