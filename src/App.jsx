import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import Introduction from "./routes/introduction"
import Menu from "./routes/menu"
import Location from "./routes/location"
import Blog from "./routes/blog"
import Book from "./routes/book"


function App() {

  return (
<>
<NavBar/>
<Routes>
  <Route path="/" element={<Introduction/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/ubicacion" element={<Location/>}/>
  <Route path="/pasion-por-el-te" element={<Blog/>}/>
  <Route path="/reservas" element={<Book/>}/>
</Routes>
</>
  )
}

export default App
