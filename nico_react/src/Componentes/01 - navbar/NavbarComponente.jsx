import "./NavbarComponente.css";
import { Link } from "react-router";
import logo_nico from "../../assets/images/logo_nico.png";
import { Cart4 } from "react-bootstrap-icons";
import { CartWidget } from "../01b - cartwidget/CartWidget";

export const Navbar_Componente = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
          <div className="logo">
            <img src={logo_nico}></img>
          </div>
          </Link>

          <div className="nav-links">
            <Link to="/category/week">Week Setups</Link>
            <Link to="/category/season">Season Setups</Link>
            <a href="#about">About</a>
          </div>

          <div className="cart-icon">
            <Link to="cart" style={{ textDecoration: 'none', color: 'inherit' }}> <CartWidget /> </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
