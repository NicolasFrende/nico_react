import './Navbar_componente.css'
import logo_nico from "../../assets/images/logo_nico.png"
import { Cart4 } from 'react-bootstrap-icons'

export const Navbar_Componente = () => {
    return (
       <>
       <div className='NAVBAR'>
            <div className='logo'>
                <img src={logo_nico} alt="logo" />
            </div>
        
            <div className='frase'>
                <h1>esto es el navbar</h1>                
            </div>

            <div className='icon'>
                <Cart4 />
            </div>
       </div>
       

        </> 
    )
}