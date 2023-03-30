
import { useNavigate } from 'react-router'
import '../styles/HeaderStyle.css'
import '../styles/VariablesStyle.css'


function Header () {

  const navigate = useNavigate()

  return (

    <header className='header'>
      <div className='header-logo'>
        <a href="/"><img src='/assets/img/logo.svg'/></a>
      </div>
      <div className='header-menu'>
        <nav>
          <span>
            <a href='/qui-sommes-nous'>QUI SOMMES NOUS ?</a>
          </span>
          <span>
            <a href='/produit'>NOTRE PRODUIT</a>
          </span>
          <span>
            <a href='/contact'>CONTACTEZ-NOUS</a>
          </span>
        </nav>
      </div>
      </header>
  )
}

export default Header