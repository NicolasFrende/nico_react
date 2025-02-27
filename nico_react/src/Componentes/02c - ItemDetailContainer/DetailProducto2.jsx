import { useParams } from "react-router";
import { Producto2 } from "../02b - allTheProducts/Producto2";
import "./DetailProducto.css";
import Button from "@material-ui/core/Button";
import ATR_MP_Logo_Color_Bccc from "../../assets/images/ATR_MP_Logo_Color_Bccc.png";



export const Detail_Producto2 = ({}) => {

    const {season} = useParams();
    
    

  return (
    <div className="CONTEINERprod">
<div className="Producto1">
      <div className="producto_imagen">
        <img className="logo_prod" src={ATR_MP_Logo_Color_Bccc}></img>
      </div>
      <div className="producto_texto">
      Porsche GT3 992 All Set Ups - Season {season} 2025 
      </div>
      <div className="producto_precio1"> 150 $</div>
      <div className="descripcion"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga optio numquam incidunt possimus. Earum cupiditate quidem ullam id, aliquam distinctio ducimus quia hic? Eos veniam praesentium necessitatibus mollitia voluptatibus fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi exercitationem repellendus, tempore consequuntur aliquam eos praesentium doloremque itaque rerum consectetur similique, magnam ipsa quasi. Delectus, accusantium? Maxime vel enim reiciendis.</div>
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
    </div>
    




        
  )
}
