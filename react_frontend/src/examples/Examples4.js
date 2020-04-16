// Fetch
import React, { useEffect, useState } from "react"


export const FetchExample = () => {
    const [author, setAuthor] = useState("Searching");
    const [quote, setQuote] = useState("");

    const fetchUrl = async () => {
        try {
            const response = await fetch("http://quotes.rest/qod.json");
            const json = await response.json();
            setAuthor(json.contents.quotes[0].author);
            setQuote(json.contents.quotes[0].quote);
        } catch (error) {
            setAuthor(error);
        }
    }

    useEffect(() => { fetchUrl() }, [] );

    return (
        <div>
            { quote }<br />{ author }
        </div>
    )
}