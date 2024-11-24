
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Inicio from './view/Inicio'
import Proyectos from './view/Proyectos'
import Productos from './view/Productos'
import NavBar from './NavBar/NavBar'
import QuienesSomos from './view/QuienesSomos'
import Contactenos from './view/Contactenos'


function App() {


  return (
    <HashRouter>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Proyectos" element={<Proyectos />} />
      <Route path="/Productos" element={<Productos />} />
      <Route path='/Quienes somos' element={<QuienesSomos/>}/>
      <Route path='/Contactenos' element={<Contactenos />}/>
    </Routes>
  </HashRouter>
  )
}

export default App
