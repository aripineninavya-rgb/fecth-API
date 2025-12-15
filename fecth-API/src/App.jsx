import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import BalloonPop from './Components/BalloonPop';



function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Navigate to = "/signup"/>}/>
        <Route path='/signup' element = {<SignUp/>}/>   
        <Route path='/login' element = {<Login/>}/>
        <Route path='/game' element = {<BalloonPop/>}/>  
      </Routes> 
    </Router>
  );
}

export default App;
