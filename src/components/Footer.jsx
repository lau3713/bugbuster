import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoIosMailOpen } from 'react-icons/io'
import '../styles/FooterStyle.css'
import '../styles/VariablesStyle.css'

function Footer() {
  return (
    <div>
    <div className="footer">
      <div className='footer-menu'>
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
      <div className='footer-logo'>
        <img src='/assets/img/logo.svg'/>
      </div>

      <div className='social-media'>
        <p className='paraph'>Suivez-nous sur les réseaux sociaux
pour découvrir notre aspirateur en action !</p>
      <div className='icon'>
        <a href="https://www.facebook.com/"><FaFacebookF size={30} /></a>
        <a className='azer' href="https://www.instagram.com/"><BsInstagram size={30} /></a>
        <a href="mailto:email@example.com"><IoIosMailOpen size={30} /></a>
      </div>
      </div>
    </div>
    <div className='mentions'>
      <p>© Bugbuster 2023 - Tous droits réservés - Mentions légales</p>
    </div>
    </div> 
   );
}

export default Footer;