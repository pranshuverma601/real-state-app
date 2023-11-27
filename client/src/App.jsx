import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Abouts from './pages/Abouts';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/'element={"<Home />"}/>
      <Route path='/sign-in'element={"<SingIn />"}/>
      <Route path='/sign-up'element={"<SingUp />"}/>
      <Route path='/profile'element={"<Profile />"}/>
      <Route path='/abouts'element={"<Abouts />"}/>
    </Routes>
  </BrowserRouter>;
}
