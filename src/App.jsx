import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import Introduction from "./routes/introduction"
import Menu from "./routes/menu"
import Location from "./routes/location"


function App() {

  return (
<>
<NavBar/>
<Routes>
  <Route path="/" element={<Introduction/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/ubicacion" element={<Location/>}/>
</Routes>
</>
  )
}

export default App
