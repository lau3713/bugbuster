import '../styles/AvisStyle.css'
import { AiFillStar } from 'react-icons/ai'


function Avis() {
  return (
    <div className="container">
      <h2 className="title">ILS NOUS FONT CONFIANCE</h2>
      <div className="avis-container">
        <div className="avis">
          <div className="stars">
        <AiFillStar size={30} />
        <AiFillStar size={30} />
        <AiFillStar size={30} />
            </div>
          <h3>publié le 23/04/23</h3>
          <p>« Très Satisfaite De Mon Achat.
Bye Bye Ma Peur Des Insectes »</p>
        </div>
        <div className="avis">
          <div className="stars">
          <AiFillStar size={30} />
        <AiFillStar size={30} />
        <AiFillStar size={30} />
          </div>
          <h3>publié le 23/04/23</h3>
          <p>« Très Satisfaite De Mon Achat.
Bye Bye Ma Peur Des Insectes »</p>
        </div>
        <div className="avis">
          <div className="stars">
          <AiFillStar size={30} />
        <AiFillStar size={30} />
        <AiFillStar size={30} />
          </div>
          <h3>publié le 23/04/23</h3>
          <p>« Très Satisfaite De Mon Achat.
Bye Bye Ma Peur Des Insectes »</p>
        </div>
      </div>
    </div>
  );
}

export default Avis;