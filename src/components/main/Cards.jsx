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

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

export default function Cards({ onCardClick }) {
    const [updatedSpongeIds, setUpdatedSpongeIds] = useState(spongeIds);
    const [gifMap, setGifMap] = useState({}); // { id: gifUrl }

    useEffect(() => {
        const fetchAllGifs = async () => {
            const apiKey = "1Yf3NuogrS4q5SoCqUV1djDyJpAEPU3j";

            const newGifMap = {};

            for (let id of spongeIds) {
                try {
                    const res = await fetch(
                        `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
                    );
                    const data = await res.json();

                    // If response is OK and data is valid, use the real URL
                    if (data?.data?.images?.original?.url) {
                        newGifMap[id] = data.data.images.original.url;
                    } else {
                        // Fallback if structure is broken
                        newGifMap[id] =
                            `https://media.giphy.com/media/${id}/giphy.gif`;
                    }
                } catch (err) {
                    console.warn(
                        `Fallback for ${id} due to API error:`,
                        err.message
                    );
                    newGifMap[id] =
                        `https://media.giphy.com/media/${id}/giphy.gif`;
                }
            }

            setGifMap(newGifMap);
        };

        fetchAllGifs();
    }, []);

    function handleCardClick(event) {
        setUpdatedSpongeIds(shuffleArray(updatedSpongeIds));
        onCardClick(event.target.id);
    }

    function SpongeCard({ spongeId, id }) {
        const gifUrl = gifMap[spongeId];

        return (
            <button className="card" onClick={handleCardClick}>
                {gifUrl ? (
                    <img src={gifUrl} alt="Giphy GIF" id={id} />
                ) : (
                    <p>Loading...</p>
                )}
            </button>
        );
    }

    return (
        <div className="cards-container">
            {updatedSpongeIds.slice(0, 8).map((id) => (
                <SpongeCard key={id} spongeId={id} id={id} />
            ))}
        </div>
    );
}
