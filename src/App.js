import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Circles from './components/Circles';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import Partner from './components/Partner';
import Login from './components/Login';
import Register from './components/Register';
import Member from './components/Member';
import Profile from './components/Profile';
import Meru from './components/Meru';
import Machakos from './components/Machakos';
import Kiambu from './components/Kiambu';
import Uganda from './components/Uganda';
import Events from './components/Events';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/meru" element={<Meru />} />
        <Route path="/machakos" element={<Machakos />} />
        <Route path="/kiambu" element={<Kiambu />} />
        <Route path="/kampala" element={<Uganda/>} />
        <Route path="/circles-of-trust" element={<Circles/>}  />
        <Route path="/join-the-movement" element={<Sponsor/>} />
        <Route path="/partner" element={<Partner/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/create-your-own-circles" element={<Member/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
