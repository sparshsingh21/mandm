import logo from './logo.svg';
import './App.css';
import Countdown from './components/Countdown';
import LoginForm from './components/FormPage'; 
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Home from './components/Home';


function App() {
  // return <Countdown/>
  // return <LoginForm/>
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
