import '../styles/SliderStyle.css'
import '../styles/CounterStyle.css'
import Counter from './Counter2';

function Slider2 () {
  return (
    <>
    <div className='sliderss'>
      <div className='head'>
        <h2>7 français sur 10 <br></br> sont entomophobes !</h2>
        <Counter endNumber={7} />
      </div>
      <div >
        <p className='paraph'>L’entomophobie ne vous dit rien ? 
Pourtant, cette phobie est très répandue en Hexagone et touche 7 Français sur 10.  En effet, l’entomophobie désigne la peur des insectes et se caractérise par une crainte irraisonnée et incontrôlable ressentie par un individu lorsqu’il est en présence d’un moustique, d’un cafard, d’une fourmi… Cette crainte provoque généralement une sudation excessive, des vertiges, de l’anxiété voire même des malaises. <br /><br />

Cette phobie animale peut toutefois se combattre grâce à Bug Buster. Finit les crises et bonjour la tranquillité. <br /><br />

Alors n’attendez plus et dites adieux à vos peurs ;</p>
    <div className='spiderweb2'>
      <img src="/assets/img/spiderweb2.png" alt="spiderweb" />
    </div>
      </div>
    </div>
    
    </>
   );
}

export default Slider2;
