import './Navbar_componente.css'

import logo_nico from "../../assets/images/logo_nico.png"
import { Cart4 } from 'react-bootstrap-icons'

export const Navbar_Componente = () => {
    return (
       <>
       <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo_nico}></img> 
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </div>

        <div className="cart-icon">
          <Cart4 size={24} />
        </div>
      </div>
    </nav>
       

        </> 
    )
}