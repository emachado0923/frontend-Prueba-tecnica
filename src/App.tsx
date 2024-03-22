import FormularioComponents from "./Components/FormularioComponents";
import ListaComponents from "./Components/ListaComponents";
import ShowProductsComponet from "./Components/ShowProductsComponet";
//require('dotenv').config()

function App() {
  return (
    <div className="row">
      <FormularioComponents />
      <ShowProductsComponet />
    </div>
  );
}

export default App;
