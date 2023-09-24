import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import Introduction from "./routes/introduction"
import Menu from "./routes/menu"
import Header from "./components/Header"



function App() {

  return (
<>
<NavBar/>
<Routes>
  <Route path="/" element={<Introduction/>}/>
  <Route path="/menu" element={<Menu/>}/>
</Routes>
<Header title='Desarrollada por Ivon Nancupil' />
</>
  )
}

export default App
