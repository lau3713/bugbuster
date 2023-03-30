import '../styles/About.css'
import CoverAbout from "../components/CoverAbout";
import DreamTeam from "../components/DreamTeam";

function About() {
  return ( 
    <>
    <CoverAbout/>
    <div className="paragraphes-about">
    <p>L’histoire du projet Bug Buster commence avec trois étudiants, Laurie, Victor et Eva, qui ont eu l’idée de créer un aspirateur à insectes innovant lors de leurs partiels en mars 2023. Leur produit a une fonctionnalité unique qui permet d’aspirer les insectes sans les tuer, offrant ainsi une solution plus respectueuse de l’environnement pour les personnes qui ont peur des insectes.</p>
    <p className="paragraph2-about">Le produit créé par les étudiants se nomme « Bug Buster » 
Un aspirateur à insectes doté d’une fonctionnalité unique !
Possibilité de relâcher les insectes capturés dans la nature, sans les tuer</p>
    </div>
    
    <DreamTeam />
<div className="paragraphes-about">
    <p>Le fonctionnement de l’aspirateur est simple : il suffit de diriger l’embout vers l’insecte à capturer, d’appuyer sur le bouton d’aspiration pour aspirer l’insecte dans un bocal de récupération intégré, puis de déclencher la fonction « expiration » pour relâcher l’insecte dans un lieu sûr à l’extérieur. <br /> <br />

Ce produit est ainsi adapté pour les personnes ayant une phobie des insectes ou souhaitant préserver la nature en évitant de tuer les insectes. <br />
L’inspiration pour leur projet est venue d’un groupe de camarades de classe qui sont venus les voir, apeurées par la présence d’une araignée dans leur salle de classe. Cette expérience a incité l’équipe à trouver une solution respectueuse de l’environnement pour aider les personnes à faire face à leur peur des insectes. <br /> <br />

Le projet est prévu pour voir le jour en 2024, mais pour cela, l’équipe doit trouver un investisseur pour financer sa production. Avec leur passion et leur détermination, Laurie, Victor et Eva sont prêts à faire de Bug Buster un succès sur le marché des aspirateurs à insectes.</p>
   
<div className='spiderweb1'>
      <img src="/assets/img/spiderweb1.png" alt="spiderweb" />
    </div>
<div className='button-about'>
   <button className='button' ><a href="/contact">Contactez-nous pour investir chez Bug Buster</a></button>
   </div>

   </div> 

    </>

  )}
export default About