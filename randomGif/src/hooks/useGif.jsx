import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif(query) {
    const [gif, setGif] = useState();
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        const source = query ? `${url}&tag=${query}` : url;
        const { data } = await axios.get(source);
        const imgSrc = data.data.images.downsized_medium.url;
        setGif(imgSrc);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return { gif, loading, fetchData };
}