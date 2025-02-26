import "./NavbarComponente.css";

import logo_nico from "../../assets/images/logo_nico.png";
import { Cart4 } from "react-bootstrap-icons";
import { CartWidget } from "../01b - cartwidget/CartWidget";

export const Navbar_Componente = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo_nico}></img>
          </div>

          <div className="nav-links">
            <a href="#welcome">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
          </div>

          <div className="cart-icon">
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};
