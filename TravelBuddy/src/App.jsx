import Card from './component/Card';
import React, { useCallback, useState } from 'react'

function App() {
  const data = [
    {
      id: "1",
      price: "35,456",
      city: "Agra",
      description: "Agra, located in Uttar Pradesh, India, is renowned for the iconic Taj Mahal, a UNESCO World Heritage Site symbolizing eternal love. Home to the majestic Agra Fort, vibrant markets, and exquisite handicrafts, Agra offers a captivating blend of history, culture, and architectural splendor, attracting visitors from around the globe.",
      image: "https://lp-cms-production.imgix.net/2019-06/283389.jpg?auto=format&fit=crop&ar=1:1&q=75&w=1200https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "2",
      price: "33,650",
      city: "Banaras",
      description: "Banaras, also known as Varanasi, is a sacred city on the banks of the Ganges River in Uttar Pradesh, India. It is famous for its ghats, where pilgrims bathe and perform rituals. Banaras is also renowned for its ancient temples, vibrant street life, and spiritual ambiance, attracting visitors seeking enlightenment and cultural immersion.",
      image: "https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "3",
      price: "27,660",
      city: "Kolkata",
      description: "Kolkata, the capital of West Bengal, India, is a vibrant metropolis renowned for its rich culture, artistic heritage, and intellectual legacy. From colonial landmarks to bustling markets and delectable street food, Kolkata offers a dynamic blend of history, commerce, and culture, captivating visitors with its eclectic charm.",
      image: "https://images.unsplash.com/photo-1628068147323-4b27e9ac750d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "4",
      price: "22,660",
      city: "Mumbai",
      description: "Mumbai, the bustling capital of Maharashtra, India, is a melting pot of cultures, commerce, and creativity. Home to Bollywood, India's film industry, Mumbai dazzles with its iconic landmarks, bustling markets, and vibrant nightlife. The city's cosmopolitan atmosphere and dynamic energy make it a captivating destination for travelers worldwide.",
      image: "https://i0.wp.com/oneday.travel/wp-content/uploads/one-day-mumbai-local-sightseeing-tour-package-private-cab-header.jpg?w=1920&ssl=1"
    },
    {
      id: "5",
      price: "34,620",
      city: "Noida",
      description: "Noida, a thriving city in Uttar Pradesh, India, is renowned for its modern infrastructure, bustling commercial hubs, and vibrant lifestyle. With its sleek skyscrapers, shopping malls, and green spaces, Noida offers a perfect blend of urban convenience and suburban tranquility, making it an attractive destination for residents and visitors alike.",
      image: "https://static.india.com/wp-content/uploads/2023/08/Greater-Noida-Freepik.jpg?impolicy=Medium_Widthonly&w=700"
    },
    {
      id: "6",
      price: "67,660",
      city: "Heydrabad",
      description: "Hyderabad, the capital of Telangana, India, is a city of contrasts, blending old-world charm with modernity. Famous for its rich history, delectable cuisine, and iconic landmarks like the Charminar and Golconda Fort, Hyderabad exudes a unique cultural identity that enthralls visitors from around the world.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Charminar_sumeet_photography_3.JPG/800px-Charminar_sumeet_photography_3.JPG"
    },
    {
      id: "7",
      price: "37,660",
      city: "Bombay",
      description: "Bombay, also known as Mumbai, is the bustling capital of Maharashtra, India, and the country's financial powerhouse. With its iconic skyline, bustling streets, and vibrant culture, Bombay captivates with its energy and diversity. From historic landmarks to bustling markets and Bollywood glamour, Mumbai offers an unforgettable experience.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/800px-F7xZ48abwAAgNst.jpg"
    },
    {
      id: "8",
      price: "18,660",
      city: "Kashmir",
      description: "Kashmir, often referred to as \"Paradise on Earth,\" is a breathtakingly beautiful region nestled in the Himalayas, known for its pristine landscapes, serene lakes, and snow-capped mountains. Renowned for its natural beauty and warm hospitality, Kashmir offers a tranquil retreat for travelers seeking solace and rejuvenation.",
      image: "https://static.toiimg.com/thumb/msid-96567007,width-748,height-499,resizemode=4,imgsize-184030/.jpg"
    },
    {
      id: "9",
      price: "26,660",
      city: "Delhi",
      description: "Delhi, the capital of India, is a city of contrasts, where ancient history meets modernity. Home to UNESCO World Heritage Sites like the Red Fort and Qutub Minar, Delhi enthralls with its rich cultural heritage, bustling markets, and vibrant street life, offering a kaleidoscope of experiences for visitors.",
      image: "https://plus.unsplash.com/premium_photo-1697729681522-c4e33d91b40a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

  ];

  const [tours, setTour] = useState(data);

  //to remove tour
  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTour(newTour);
  };

  return (
    <div
      className='min-h-screen h-full w-full bg-gradient-to-br from-emerald-300 to-sky-300'>
      <h1
        className='h-[10vh] w-full bg-black text-white text-center p-4 text-2xl font-bold fixed top-0'>
        Travel buddy
      </h1>

      {
        (tours.length === 0) ?
          (
            <div className='h-[90vh] flex justify-center items-center'>
              <div className='text-center'>
                <h2 className='text-2xl font-bold'>Opps! No tour left</h2>
                <button
                  className='mt-[10px] w-[100px] h-[35px] bg-black rounded-lg text-white font-bold'
                  onClick={() => setTour(data)}>
                  Refresh
                </button>
              </div>
            </div>
          ) :
          (
            <Card data={tours} removeTour={removeTour} />
          )
      }

    </div>
  )
}

export default App
