import Home from '../Pages/Home';
import Registro from '../Pages/Registro';
import {
  Routes,
  Route
} from "react-router-dom"
import Login from '../Pages/Login';
import Detalle from '../Pages/Detalle';
import NotFound from '../Pages/NoFound';
import Inicio from '../Pages/Inicio';
import ProductosAlta from '../Pages/ProductosAlta';
import DetalleFirebase from '../Pages/DetalleFirebase';
import ProductosModificar from '../Pages/ProductosModificar';
import HomeFire from '../Pages/HomeFire';

function Public(props) {
  return (
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/homeFire' element={<HomeFire/>}/>
          <Route path='/alta' element={<Registro/>}/>
          <Route path='/ingresar' element={<Login setLogin={props.setLogin}/>}/>
          <Route path='/productos/alta' element={<ProductosAlta/>}/>
          <Route path='/productos/modificar/:id' element={<ProductosModificar/>}/>
          <Route path='/producto/:id' element={<Detalle/>}/>
          <Route path='/productos/:id' element={<DetalleFirebase/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
  );
}

export default Public;