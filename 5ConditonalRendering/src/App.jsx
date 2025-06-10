// Conditional Rendering = Allows you to control what gets rendered
//                         in you Application based on certain conditions
//                         (show, hide or change components)

import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Aditya"/>
      <br></br>
      <UserGreeting isLoggedIn={true}/>
      <br></br>
      <UserGreeting/>
    </>
  );
}

export default App
