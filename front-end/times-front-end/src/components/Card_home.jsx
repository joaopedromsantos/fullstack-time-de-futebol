import Imagem from "../media/chuteira_svg.svg"

import './Card_home.css'

const Card_home = () => {
  return (
    <div id='card'>
      <div id='div_imagem'>
        <img src={ Imagem } alt="Logo" id='imagem_chuteira' />
      </div>
      <div id='parte_escrita'>
        <h1>Bem vindo ao site!!</h1>
        <h3>Cadastre seu time <br /> nessa plataforma.</h3>  
      </div>
    </div>
  )
}

export default Card_home
