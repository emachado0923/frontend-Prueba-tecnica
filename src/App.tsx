import FormularioComponents from "./Components/FormularioComponents";
import ListaComponents from "./Components/ListaComponents";
//require('dotenv').config()

function App() {
  return (
    <div className="row">
      <FormularioComponents />
      <ListaComponents />
    </div>
  );
}

export default App;
