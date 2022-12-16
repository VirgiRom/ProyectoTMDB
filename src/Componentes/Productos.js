import React,{useState, useEffect} from 'react'
import Producto from './Producto'
import {getAllProductos} from '../Services/ProductosServices'
import {Row} from 'react-bootstrap'

function Productos() {
  const [listadoProductos, setListadoProductos] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const hola = await getAllProductos();
        setListadoProductos(hola.data.results);
      } catch (e) {
      }
    };
    request();
  }, []);
  return (
    <div id="contenedor">
      <Row>
        {listadoProductos.map((listadoProducto) => (
          <Producto
            key={listadoProducto.id}
            nombre={listadoProducto.title}
            fecha={listadoProducto.release_date}
            backdrop_path={listadoProducto.backdrop_path}
            id={listadoProducto.id}
          />
        ))}
      </Row>
    </div>
  );
}

export default Productos;




        //      fetch('https://api.themoviedb.org/3/movie/popular?api_key=9f65d3a91912519ce8ddbfbe32b5ab12&language=es-ES')
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data.results);
        //         setListadoProductos(data.results);
               
        //     })
        //     .catch(e=>{
        //         console.log(e);
        //     })
        // },
        // []