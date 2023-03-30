import '../styles/SliderStyle.css'
import Counter from './Counter';

function Slider () {
  return (
    <>
    <div className='sliderss'>
      <div className='head'>
        <h2>BUG BUSTER</h2>
        <Counter endNumber={2023} />
      </div>
      <div >
        <p className='paraph'>Le projet Bug Buster a été créé par trois étudiants, Laurie, Victor et Eva, lors de leurs partiels en mars 2023. <br /><br /> Leur idée est de créer un aspirateur à insectes innovant qui permet d’aspirer les insectes sans les tuer et de les relâcher dans la nature. <br /> Ils ont conçu l’identité visuelle de la marque, réalisé une analyse marketing approfondie ainsi qu’un plan de communication pour promouvoir le produit. <br /><br /> Leur inspiration est venue lorsqu’un groupe de camarades de classe sont venus les voir, apeurées par la présence d’une araignée dans leur salle de classe. <br /><br /> Le projet est prévu pour voir le jour en 2024, à condition de trouver un investisseur pour financer sa production.</p>
      </div>
      <div className='spiderweb1'>
      <img src="/assets/img/spiderweb1.png" alt="spiderweb" />
    </div>
      <div className='button-container'>
      <button className='button' ><a href="/qui-sommes-nous">3 étudiants, 1 projet, découvrez-nous</a></button>
    </div>
    </div>
    
    </>
   );
}

export default Slider;
