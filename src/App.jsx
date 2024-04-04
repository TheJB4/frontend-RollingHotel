import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Outlet/>}></Route>
          <Route index element={<h1>Home</h1>}></Route>
          <Route path='/habitaciones' element={<h1>Habitaciones</h1>}></Route>
          <Route path='/servicios' element={<h1>Servicios</h1>}></Route>
          <Route path='/novedades' element={<h1>Novedades</h1>}></Route>
          <Route path='/contacto' element={<h1>Contacto</h1>}></Route>
          <Route path='/reserva' element={<h1>Reserva</h1>}></Route>
          <Route path='*' element={<h1>Pagina no encontrada 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
