import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './Components/Header';

function App() {
  return (
    <main className='d-flex flex-column min-vh-100"'>
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Outlet />}></Route>
            <Route index element={<Home />}></Route>
            <Route path='/habitaciones' element={<h1>Habitaciones</h1>}></Route>
            <Route path='/quienesSomos' element={<h1>Quienes somos</h1>}></Route>
            <Route path='/novedades' element={<h1>Novedades</h1>}></Route>
            <Route path='/contacto' element={<h1>Contacto</h1>}></Route>
            <Route path='*' element={<h1>Pagina no encontrada 404</h1>}></Route>
          </Routes>
        </div>
        <footer className="bg-dark text-light py-3 mt-auto">Este es el footer</footer>
      </div>
    </BrowserRouter>
    </main>
  )
}

export default App
