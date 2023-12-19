import { Link } from 'react-router-dom'

import Logo from "../media/logo.png"

const Navbar = () => {
  return (
    <nav id='nav-bar'>
        <div id='logo'>
            <img src={ Logo } alt="Logo" />
        </div>
        <div id='links'>
            <h2>
            <Link to="/">Home</Link>
            <Link to="/List">Lista dos Times</Link>
            <Link to="/Create">Adicionar Time</Link>
            </h2>
        </div>
    </nav>
  )
}

export default Navbar