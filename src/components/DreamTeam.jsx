import '../styles/DreamTeamStyles.css'
import '../styles/AvisStyle.css'

function DreamTeam() {
  return (

    <div className="container">
      <h2 className="title">LA DREAM TEAM</h2>
      <div className="avis-container">
      <div className="people">
        <div className='img-people'>
          <img src="/assets/img/eva.PNG" />
        </div>
          <p>Eva Gaudineau</p>
        </div>
        <div className="people">
          <div className='img-people'>
          <img src="/assets/img/laurie.jpg" />
          </div>
          <p>Laurie Tissot</p>
        </div>
        <div className="people">
          <div className='img-people'>
          <img src="/assets/img/victor.jpg" />
          </div>
          <p>Victor Vérité</p>
        </div>

      </div>
    </div>
      
      /* <div className="dreamteam">
        <div className="people">
          <img src="https://via.placeholder.com/150x150?text=Photo1" />
          <div>Nom 1</div>
        </div>
        <div className="people">
          <img src="https://via.placeholder.com/150x150?text=Photo2" />
          <div>Nom 2</div>
        </div>
        <div className="people">
          <img src="https://via.placeholder.com/150x150?text=Photo3" />
          <div>Nom 3</div>
        </div>
      </div>
    </div> */
  );
}

export default DreamTeam