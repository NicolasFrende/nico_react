import './Footer_componente.css'
import { Instagram, Facebook, Whatsapp, Envelope } from 'react-bootstrap-icons'
export const Footer_Componente = () => {
    return (
        <footer>
          <div className="footer_2"> 
              <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com//" target="_blank" >
                  <Instagram size={35}/>
                  </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://wa.me/+" target="_blank">
                    <Whatsapp size={35}/>
                  </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="" target="_blank">
                    <Facebook size={35} />
                  </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="mailto:" target="_blank">
                    <Envelope size={35} />
                  </a></li>
              </ul>
        
              <div className="maro">                
                <div className='linea'>
                  <hr />
                </div>          
                &copy; Frende 2025 | React JS
              </div> 
            </div>

        </footer>
    )
}