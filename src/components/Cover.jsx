import '../App.css';

function Cover() {
  return ( 
    <div className='slider' style={{ backgroundImage: "url(/assets/img/fondhome.svg)" }}>
        <div className="conteneur_slider">
          <h1>Chassez vos peurs,<br/> 
            pas les insectes, avec Bug Buster !</h1>
          <button className='button'><a href="/produit">Découvrez Notre Concept </a></button>
        </div>
      </div>
   );
}

export default Cover;