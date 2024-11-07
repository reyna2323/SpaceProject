import React, { useEffect, useState } from "react";

function WikipediaAPI({ query }) {
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query) {
            fetchSummary(query);
        }
    }, [query]);

    const fetchSummary = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://wikipedia-api1.p.rapidapi.com/get_summary?q=${encodeURIComponent(
                    searchQuery
                )}&lang=en&sentences=20`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key": "dde4e8c0a4mshcb022f9048836a4p1a8ff6jsn9e292a9df181",
                        "x-rapidapi-host": "wikipedia-api1.p.rapidapi.com",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch summary");
            }
            const data = await response.json();
            setSummary(data.summary || "No summary available.");
        } catch (error) {
            setSummary("Error fetching summary.");
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div>
            {loading ? <p>Loading...</p> : <p>{summary}</p>}
        </div>
    );
}

export default WikipediaAPI;
