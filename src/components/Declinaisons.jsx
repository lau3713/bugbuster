import '../styles/DeclinaisonsStyle.css'


function Declinaisons() {
  return ( 
    <div className='couleurs'> 

    <h2>Autres couleurs</h2>
    <div className="declinaisons-row">
      <div className='declinaisons-column'>
      <img className="img-declinaison" src="/assets/img/aspirateur.png" alt="your-image"  />
      <button className='button'><a href="/produit">Acheter notre produit </a></button>
      </div>
      <div className='declinaisons-column'>
      <img className="img-declinaison" src="/assets/img/aspirateur.png" alt="your-image"  />
      <button className='button'><a href="/produit">Acheter notre produit </a></button>
      </div>
      <div className='declinaisons-column'>
      <img className="img-declinaison" src="/assets/img/aspirateur.png" alt="your-image"  />
      <button className='button'><a href="/produit">Acheter notre produit </a></button>
      </div>
    </div>
    </div>
   );
}

export default Declinaisons;