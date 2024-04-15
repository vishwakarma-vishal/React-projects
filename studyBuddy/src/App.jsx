import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { apiUrl, filterData } from './data'
import { useEffect, useState } from 'react'
import Spinner from "./components/Spinner"

function App() {
  const [courses, setCourses] = useState(null);  //varible that will save data
  const [loading, setLoading] = useState(true); //for showing the loading....
  const [category, setCategory] = useState(filterData[0].title); //for category

  //api call to get the data
  useEffect(() => {
    //async function for asynchronous javascript
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData(); //function calling
  }, []);

  return (
    <div className='min-h-screen w-full flex flex-col bg-gradient-to-br from-purple-200 to-sky-400 text-white pb-5'>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className='min-h-[80vh]'>
        {
          loading ?
            (<Spinner />) :
            (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  )
}

export default App
