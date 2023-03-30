import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";
import '../styles/Contact.css';


function Contact() {
  return (  
    <>
    
    <div className="contact">
    <h1>Contactez-nous</h1>
    <ContactForm   />
    </div>
    <SocialMedia />
    </>

  )}

export default Contact;