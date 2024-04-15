import Random from './component/Random'
import Tag from './component/Tag'

function App() {

  return (
    <div className="w-full min-h-screen bg-gray-500">
      <div className='w-full h-[10vh] flex justify-center items-center bg-gray-900'>
        <h1 className='text-xl font-bold  text-white'>RANDOM GIFS</h1>
      </div>

      <div className="flex flex-wrap justify-center basis-4/12  items-start gap-5 p-5">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
