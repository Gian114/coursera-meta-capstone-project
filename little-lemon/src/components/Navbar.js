import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-white p-4'>
      <div className='container flex justify-center space-x-8'>
        <img src={logo} alt="logo" />
        <ul className='flex space-x-4 pt-2 pl-4 font-sans font-semibold'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;