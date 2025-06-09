import profilePic from './assets/profile.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" height="200"></img>
            <h2 className="card-title">Aditya Rawat</h2>
            <p className="card-text">I am a student at Graphic Era University. Currently, pursuing Bachlore in Computer Application.</p>
        </div>
    );
}

export default Card