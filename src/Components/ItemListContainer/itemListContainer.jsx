import "./itemListContainer.css";

export const ItemListContainer = (props) => {
  const { producto, id, precio, cantidad, imagen } = props;
  return (
    <div className="divProductos">
      <h2>{producto}</h2>
      <p>{precio}</p>
      <p>Cantidad: {cantidad} </p>
      <h3>Precio: {precio}</h3>
      <div className="botonContainer">
        <button className="agregarBtn">Agregar al carrito</button>
      </div>
    </div>
  );
};
