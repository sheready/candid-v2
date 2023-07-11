import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Circles from './components/Circles';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import Partner from './components/Partner';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circles-of-trust" element={<Circles/>}  />
        <Route path="/join-the-movement" element={<Sponsor/>} />
        <Route path="/partner" element={<Partner/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
