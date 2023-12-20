import { Link } from 'react-router-dom'

import Logo from "../media/logo_svg.svg"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id='nav-bar'>
        <div id='logo'>
            <img src={ Logo } alt="Logo" id='imagem' />
        </div>
        <div id='links'>
            <h2><Link to="/">Home</Link></h2>
            <hr className="divider" />
            <h2><Link to="/List">Lista dos Times</Link></h2>
            <hr className="divider" />
            <h2><Link to="/Create">Adicionar Time</Link></h2>
            
        </div>
    </nav>
  )
}

export default Navbar