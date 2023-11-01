import "./App.css";
import NavBar from "./Components/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/itemListContainer";

function App() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="listaProductos">
        <ItemListContainer producto="CajasCS" id="1" cantidad="1" precio="$200" />
        <ItemListContainer producto="RiotPoint" id="2" cantidad="1000" precio="$500" />
        <ItemListContainer producto="C-Stacks" id="3" cantidad="200000" precio="$1000" />
      </div>
    </div>
  );
}

export default App;
