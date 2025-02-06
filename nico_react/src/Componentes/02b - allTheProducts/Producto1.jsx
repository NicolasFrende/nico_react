import "./Producto1.css";
import Button from "@material-ui/core/Button";
import ATR_MP_Logo_Color_Bccc from "../../assets/images/ATR_MP_Logo_Color_Bccc.png";

export const Producto1 = ({week}) => {
  
  return (
    <div className="Producto">
      <div className="producto_imagen">
        <img className="logo_prod" src={ATR_MP_Logo_Color_Bccc}></img>
      </div>
      <div className="producto_texto">
      Porsche 992 Set Up - Season 1 2025 week {week}
      </div>
      <div className="producto_precio"> 10 $</div>
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
