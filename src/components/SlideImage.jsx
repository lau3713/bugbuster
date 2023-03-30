import { useEffect, useState } from 'react';
import '../styles/SlideImgStyle.css'


function SlideImage() {

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = document.querySelector('.image');
    const text = document.querySelector('.text');

    if (imageLoaded) {
      setTimeout(() => {
        image.style.right = '54%';
        text.style.opacity = '1'; 
      }, 1000);
    }
  }, [imageLoaded]);

   


  return ( 
    <div className="cont">
      <img src="/assets/img/aspirateur.png" alt="your-image" className="image" onLoad={() => setImageLoaded(true)} />
      <div className="text">
        <h2>Bug Bugster</h2>
        <ul>
          <li>EFFICACE</li><br />
          <li>PRATIQUE</li><br />
          <li>RESPECTUEUX DE L'ENVIRONNEMENT</li>
        </ul>
      </div>
    </div>
   );
}

export default SlideImage;