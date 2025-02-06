import "./About_componente.css";
import fotonico_atr from "../../assets/images/fotonico_atr.png";
import logo_nico from "../../assets/images/logo_nico.png";

export const About_Componente = () => {
  return (
    <>
      <div id="about" className="baner">
        <div className="texto_info">
          <div>
            <img className="nico" src={logo_nico}></img>
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          repudiandae sed eum, dicta perspiciatis praesentium ullam voluptate
          molestias. Minima pariatur exercitationem perspiciatis vel a
          aspernatur inventore dolorum eaque labore id.
        </div>
        <div className="creador">
          <img className="foto_nico" src={fotonico_atr}></img>
        </div>
      </div>
    </>
  );
};
