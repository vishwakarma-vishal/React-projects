import { useState } from "react";
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

export default function Tag() {
    const [query, setQuery] = useState("game");
    const { gif, loading, fetchData } = useGif(query);

    function clickHandler() {
        fetchData();
    }

    function inputHandler(event) {
        setQuery(event.target.value);
    }

    return (
        <div className="h-[450px] border bg-white flex flex-col justify-evenly items-center gap-5 p-5  rounded">
            <h2 className='font-bold text-xl '>Gif about a "{query}"</h2>
            {
                loading ? <Spinner /> : (<img className="w-[90%] h-[300px] border aspect-video" src={gif}></img>)
            }
            <div className="w-[90%] border border-gray-500 flex rounded">
                <input 
                className="w-[70%] rounded pl-2"
                type="text" value={query} onChange={inputHandler} placeholder="enter about the meme" />
                <button
                className="w-[30%] bg-green-600 py-2 text-white font-bold"
                    onClick={clickHandler}
                >Generate
                </button>
            </div>
        </div>
    )
}