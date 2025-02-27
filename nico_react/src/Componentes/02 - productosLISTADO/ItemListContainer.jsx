import { Producto1 } from "../02b - allTheProducts/Producto1";
import { Producto2 } from "../02b - allTheProducts/Producto2";
import { useParams } from "react-router";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  const products = [
    {
      class: <Producto1 week="1" />,
      category: "week",
    },
    {
      class: <Producto1 week="2" />,
      category: "week",
    },
    {
      class: <Producto1 week="3" />,
      category: "week",
    },
    {
      class: <Producto1 week="4" />,
      category: "week",
    },
    {
      class: <Producto1 week="5" />,
      category: "week",
    },
    {
      class: <Producto1 week="6" />,
      category: "week",
    },
    {
      class: <Producto1 week="7" />,
      category: "week",
    },
    {
      class: <Producto1 week="8" />,
      category: "week",
    },
    {
      class: <Producto1 week="9" />,
      category: "week",
    },
    {
      class: <Producto1 week="10" />,
      category: "week",
    },
    {
      class: <Producto1 week="11" />,
      category: "week",
    },
    {
      class: <Producto1 week="12" />,
      category: "week",
    },
    {
      class: <Producto2 season="1" />,
      category: "season",
    },
    {
      class: <Producto2 season="2" />,
      category: "season",
    },
    {
      class: <Producto2 season="3" />,
      category: "season",
    },
    {
      class: <Producto2 season="4" />,
      category: "season",
    },
  ]


  const {time} = useParams();
    return (
      <>
        <div id="products" className="galeria_productos">
        
          {products.map((product) => (
            product.category === time
              ? <div>{product.class}</div>
              : null
          ))}
          
        </div>
      </>
    );
  }
  



