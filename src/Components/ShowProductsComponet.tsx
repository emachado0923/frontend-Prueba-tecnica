import * as productoService from "../Services/ProductoServices";
import { useEffect, useState } from "react";
import { product } from "../Interfaces/Producto";

const ShowProductsComponet = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await productoService.getProducts();
      setProducts(res.data);
    };
    getProducts();
  }, [products]);

  useEffect(() => {}, [products]);
  const deleteProduct = async (id: number) => {
    const res = await productoService.deleteProduct(id);
    console.log(res);
  };

  const updateProduct = async (id: number) => {
    const res = await productoService.updateProduct(id, data);
    console.log(res);
  };

  return (
    <div className="col-md-8">
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Modelo</th>
            <th scope="col">Almacenamiento</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Creado</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product, index: number) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>Movil</td>
              <td>{product.nombre}</td>
              <td>{product.modelo}</td>
              <td>{product.almacenamiento}</td>
              <td>{product.password}</td>
              <td>{product.createdAt}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={(event) => updateProduct(product._id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(event) => deleteProduct(product._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success">Listar</button>
    </div>
  );
};

export default ShowProductsComponet;
