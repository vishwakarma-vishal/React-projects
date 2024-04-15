import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function Testimonials({ peopleData, index, length, setIndex }) {
    const data = peopleData[index];
    let newIndex = 0;

    //for displaying previous card
    function clickBackHandler(index, length) {
        newIndex = (index - 1 + length) % length;
        setIndex(newIndex);
    }

    //for displaying next card
    function clickForwardHandler(index, length) {
        newIndex = (index + 1) % length;
        setIndex(newIndex);
    }

    //for displaying random value
    function resetHandler() {
        let random = Math.floor(Math.random() * length);
        setIndex(random);
    }

    return (
        <div className='w-full text-center relative bg-white text-black px-10 py-5 rounded-lg'>
            <div className='w-[100px] h-[100px] rounded-full bg-[#912BBC] absolute -top-12 left-8'>
                <img
                    className="w-full h-full rounded-full relative top-2 right-2"
                    src={data.image.src} alt={data.image.alt}></img>
            </div>

            <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                    <h2 className="text-lg font-bold mt-5">{data.name}</h2>
                    <p className='text-xs text-[10px] font-bold uppercase text-gray-400'>{data.jobRole}</p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <span className='text-[25px] text-[#c43aff]'><RiDoubleQuotesL /></span>
                    <p className="text-xs text-gray-500 my-2">{data.about}</p>
                    <span className='text-[25px]  text-[#c43aff]'><RiDoubleQuotesR /></span>
                </div>

                <div className="text-[25px]">
                    <button
                        onClick={() => clickBackHandler(index, length)}>
                        <MdArrowBackIos />
                    </button>
                    <button
                        onClick={() => clickForwardHandler(index, length)}>
                        <MdArrowForwardIos />
                    </button>
                </div>

                <button
                    onClick={resetHandler}
                    className='bg-[#912BBC] text-white px-5 py-1 rounded font-bold'>
                    Surprise Me
                </button>
            </div>
        </div>
    );
}