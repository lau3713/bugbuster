import '../App.css';

function CoverAbout() {
  return ( 
    <div className='slider2' style={{ backgroundImage: "url(/assets/img/fondabout.png)" }}>
        <div className="conteneur_slider2">
        <h1 className="h1-about">Trois étudiants</h1>
          <p className="p-about">ont trouvé la solution contre <br /> la phobie des insectes : </p>
          <h2 className="h2-about">Bug Buster</h2>
          
        </div>
      </div>
   );
}

export default CoverAbout;