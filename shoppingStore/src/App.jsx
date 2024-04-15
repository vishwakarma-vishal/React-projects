import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

function App() {

  return (
    <div>
      <div  className="bg-slate-900">
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
