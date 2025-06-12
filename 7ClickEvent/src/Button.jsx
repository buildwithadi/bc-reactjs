function Button(){

    // const handleClick = () => console.log("OUCH!");

    const handleClick = (name) => console.log(`${name} clicked me`)

    let count = 0;
    const handleClick2 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time(s)`);
        }
        else{
            console.log(`${name} stop clicking me!`)
        }
    }

    // const handleClick3 = (e) => console.log(e);
    
    const handleClick3 = (e) => e.target.textContent = "OUCH! 🤕";

    return(
        <>
            <button onClick={() => handleClick("Aditya")} >Click Me 😄</button>
            <br></br>
            <br></br>
            <button onClick={() => handleClick2("Aditya")} >Count</button>
            <br></br>
            <br></br>
            <button onDoubleClick={(e) => handleClick3(e)} >Event</button>
        </>
    );
}

export default Button