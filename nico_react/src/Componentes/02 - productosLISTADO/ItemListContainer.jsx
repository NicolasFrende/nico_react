import { Producto1 } from "../02b - allTheProducts/Producto1";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div id="welcome" className="saludo">{greeting}</div>
      <div id="products" className="galeria_productos">
        <Producto1 week="1" />
        <Producto1 week="2" />
        <Producto1 week="3" />
        <Producto1 week="4" />
        <Producto1 week="5" />
        <Producto1 week="6" />
        <Producto1 week="7" />
        <Producto1 week="8" />
        <Producto1 week="9" />
        <Producto1 week="10" />
        <Producto1 week="11" />
        <Producto1 week="12" />
      </div>
    </>
  );
};
