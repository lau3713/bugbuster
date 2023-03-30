import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoIosMailOpen } from 'react-icons/io'
import '../styles/SocialMediaStyle.css';


function SocialMedia() {
  return (
    <div className="container">
      <h2 className="title">NOS RÉSEAUX</h2>
      <div className="avis-container">
        <div className='media'>
      <div className='icon-contact'>
        <a href="https://www.facebook.com/"><FaFacebookF size={55} /></a>
        </div>
      <div className='icon-contact'>
        <a className='azer' href="https://www.instagram.com/"><BsInstagram size={55} /></a>
      </div>
      <div className='icon-contact'>
        <a href="mailto:email@example.com"><IoIosMailOpen size={55} /></a>
      </div>
        </div>
      </div>
    </div>
  
  );
}

export default SocialMedia;