import "./Producto2.css";
import Button from "@material-ui/core/Button";
import ATR_MP_Logo_Color_Bccc from "../../assets/images/ATR_MP_Logo_Color_Bccc.png";

export const Producto2 = ({season}) => {
  
  return (
    <div className="Producto">
      <div className="producto_imagen">
        <img className="logo_prod" src={ATR_MP_Logo_Color_Bccc}></img>
      </div>
      <div className="producto_texto">
      Porsche 992 All Set Ups - Season {season} 2025 
      </div>
      <div className="producto_precio"> 100 $</div>
      <div className="boton_VERMAS">
        <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          alert("esto es una prueba para ver mas del producto 2");
        }}
        > Ver mas </Button>
      </div>
      <div className="boton_ADDcarrito">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("Tu SetUp ha sido agregado al carrito");
          }}
        >
          add to cart
        </Button>
      </div>
      
      </div>
    
  );
};
