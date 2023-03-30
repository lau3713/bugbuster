import Slider from './components/Slider';
import Background from './components/Background';
import Avis from './components/Avis';
import Slider2 from './components/Slider2';
import Cover from './components/Cover';
function App () {
  return (
    <>
      <Cover/>
      <div className='sliders'>
      </div>
      <Background  />
      <Slider />
      <Avis />
      <Slider2 />
    </>
  )
}

export default App
