import React, { useState } from 'react'


export default function Item(props) {
    const item = props.item;
    const id = item.id;
    const image = item.image;
    const price = item.price;
    const city = item.city;
    const info = item.description;
              
    const [readMore, setReadMore] = useState(false);

    function readMoreHandler() {
        setReadMore(!readMore);
    }

    const description = readMore? info: `${info.substring(0, 110)}....`

    return (
        <div className="max-w-[400px] md:w-[300px] sm:w-[350px] xs:w-[400px] h-auto min-h-[300px] bg-gray-200 p-3 rounded-xl flex flex-col gap-1">
            <div className='w-full min-w-[230px] h-[230px]'>
                <img 
                className='w-full h-full rounded'
                src={image}></img>
            </div>
            <div>
                <p className='font-bold text-green-600'>₹ {price}</p>
                <p className='mt-1 font-bold'>{city}</p>
                <p className='mt-1 text-sm text-[13px] text-gray-600'>{description}
                    <a className="text-blue-700"
                    href='#' onClick={readMoreHandler}>
                        {readMore ? " Show less" : " Read more"}
                    </a>
                </p>
            </div>
            <div className='mt-3 w-full text-center'>
                <button 
                className='border border-red-600 w-4/5 h-8 rounded hover:bg-red-600 hover:text-white'
                onClick={()=>{props.removeTour(id)}}>Not intrested</button>
            </div>
        </div>
    );
}
