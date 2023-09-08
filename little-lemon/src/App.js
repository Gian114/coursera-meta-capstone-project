import './App.css';
import Navbar from "./components/Navbar.js";
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Menu from './pages/Menu.js';
import Reservation from './pages/Reservation.js';
import Login from './pages/Login.js';
import FooterNav from './components/FooterNav.js';


function App() {
  return (
    <>
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reservation" element={<Reservation/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </main>
    <footer>
      <FooterNav />
    </footer>
    </>
  );
}

export default App;
