import React,{useState, useEffect} from 'react'
import ProductoFirebase from './ProductoFirebase'
import {getProductosFirebase} from '../Services/ProductosServices'
import {Row} from 'react-bootstrap'
import Loading from './Loading'

function ProductosFirebase() {
  const [loading, setLoading] = useState(true);
  const [listadoFirebase, setListadoFirebase] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const fire = await getProductosFirebase();
        setListadoFirebase(fire);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, []);
  return (
    <Loading loading={loading}>
      <Row>
        {listadoFirebase.map((listado) => (
          <ProductoFirebase
            key={listado.id}
            nombre={listado.data().name}
            fecha={listado.data().date}
            detalle={listado.data().description}
            imagen={listado.data().img}
            id={listado.id}
          />
        ))}
      </Row>
    </Loading>
  );
}
export default ProductosFirebase;