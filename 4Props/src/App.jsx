import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name="Aditya Rawat" age={20} isStudent={true}/>
      <Student name="Suhani Rawat" age={18} isStudent={false}/>
      <Student name="Aarav Rawat" age={13} isStudent={true}/>
      <Student name="Utkarsh Rawat" age={9} isStudent={true}/>
      <Student/>
    </>  
  );
}

export default App
