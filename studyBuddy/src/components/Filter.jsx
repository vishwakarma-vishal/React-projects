import React from 'react';
import { useState } from 'react';

export default function Filter({ filterData, category, setCategory }) {
    const [selectedButton, setSelectedButton] = useState(false);

    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className='mt-[10vh] min-h-[12vh] p-3 flex flex-wrap justify-center items-center gap-5'>
            {filterData.map((data) => {
                return (
                    <button
                        key={data.id}
                        className={`${selectedButton === data.id ? 'bg-blue-900' : 'bg-blue-500'
                            } text-white rounded-full px-6 py-2 font-bold`}
                        onClick={() => {
                            setSelectedButton(data.id);
                            filterHandler(data.title);
                        }}
                    >
                        {data.title}
                    </button>
                );
            })}
        </div>
    )
};