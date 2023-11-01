import "../Components/NavBar.css";
import logoReact from "../assets/react.svg";
import CartWidget from "../Components/carrito";

function navBar() {
  const click = (seccion) => {
    console.log(`Hiciste clic en la sección: ${seccion}`);
  };

  return (
    <>
      <nav>
        <div className="divLN">
          <img className="logoReact" src={logoReact} alt="logoReact" />
          <h1 className="tiendaNombre">Tienda De VideoJuegos</h1>
        </div>
        <ul>
          <button>
            <li onClick={() => click("Home")}>Home</li>
          </button>
          <button>
            <li onClick={() => click("Tienda")}>Tienda</li>
          </button>
          <button>
            <li onClick={() => click("Nosotros")}>Nosotros</li>
          </button>
          <button>
            <li onClick={() => click("Contacto")}>Contacto</li>
          </button>
        </ul>
        <CartWidget></CartWidget>
      </nav>
    </>
  );
}

export default navBar;
