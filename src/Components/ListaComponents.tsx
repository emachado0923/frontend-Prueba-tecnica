import React from "react";
import axios from "axios";

const ListaComponents = () => {
  const getProducts = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const url2 = "http://localhost:3000/products";
      const response = await axios.get(url2);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={getProducts} className="btn btn-success">
        Listar
      </button>
    </div>
  );
};

export default ListaComponents;
