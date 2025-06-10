import PropTypes from 'prop-types';

function UserGreeting({isLoggedIn = false, username = "Guest"}){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log In</h2>
    // }

    // return(props.isLoggedIn ? <h2 className="welcome-message"> Welcome       {props.username} </h2> : 
    //                           <h2 className="login-message"> Please log In to comtinue ! </h2>)

    const welcomeMessage = <h2 className="welcome-message"> Welcome {username} </h2>

    const loginMessage = <h2 className="login-message"> Please login to continue</h2>

    return(isLoggedIn ? welcomeMessage : loginMessage)
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting