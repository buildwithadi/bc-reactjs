function ProfilePicture(){

    const imageUrl = './src/assets/profile.png';
    
    // const handleClick4 = () => console.log("OUCH!");

    const handleClick4 = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick4(e)} src={imageUrl}></img>);
}

export default ProfilePicture