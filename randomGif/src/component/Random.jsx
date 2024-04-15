import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Random() {
    const { gif, loading, fetchData } = useGif();

    function clickHandler() {
        fetchData();
    }

    return (
        <div className="h-[450px] border bg-white flex flex-col justify-evenly items-center gap-5 p-5 rounded">
            <h2 className='font-bold text-xl '>A Random Gif</h2>
            {
                loading ? <Spinner /> : (<img className="w-[90%] h-[300px] border aspect-video" src={gif}></img>)
            }
            <button
                className='w-[90%] bg-green-500 text-white px-5 py-2 rounded font-bold'
                onClick={clickHandler}
            >Generate
            </button>
        </div>
    )
}