import { useEffect, useState } from "react";
//import movil from '../Interfaces/Dispositivo'
import axios from "axios";

const ListaComponents = () => {
  const getProducts = async () => {
    try {
      const url = "http://localhost:3000/products";
      const response = await axios.get(url).then();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
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
          {data.map((movil, index) => {
            return (
              <tr key={index}>
                <th scope="row">1</th>
                <td>movil</td>
                <td>{movil.nombre}</td>
                <td>{movil.modelo}</td>
                <td>{movil.almacenamiento}</td>
                <td>{movil.password}</td>
                <td>{movil.createdAt}</td>
                <td>
                  <button className="btn btn-info">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={getProducts} className="btn btn-success">
        Listar
      </button>
    </div>
  );
};

export default ListaComponents;
