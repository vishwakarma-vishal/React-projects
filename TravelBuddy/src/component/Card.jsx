import Item from './Item'
import React from 'react'

export default function Card({ data, removeTour }) {
    return (

        <div className='mt-[10vh] flex flex-wrap justify-center gap-5 align-center p-5'>
            {
                data.map((item) => {
                    return <Item key={item.id} item={item} removeTour={removeTour}></Item>
                })
            }
        </div>
    );
}