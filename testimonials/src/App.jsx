import { useState } from 'react'
import peopleData from './data'
import Testimonials from './Testimonials';

function App() {
  const length = peopleData.length;
  const [index, setIndex] = useState(0);

  return (
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center gap-5'>
      <div className='xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-8/12 xs:w-10/12 w-10/12'>
        <div >
          <header className='mb-5 flex flex-col justify-center items-end sm:items-center gap-1 text-2xl font-bold'>
            <h1>Our Testimonials</h1>
            <div className='w-2/12 h-[2px] bg-[#912BBC]'></div>
          </header>
        </div>

        <div>
          <Testimonials
            peopleData={peopleData}
            index={index}
            length={length}
            setIndex={setIndex}
          ></Testimonials>
        </div>

      </div>
    </div>
  )
}

export default App
