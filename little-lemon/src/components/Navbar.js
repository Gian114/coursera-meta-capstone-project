import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='bg-white p-4'>
      <div className='container flex justify-center'>
        <img src={logo} alt="logo" />
        <ul className='flex space-x-4 pt-2 pl-4 font-sans font-semibold'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservation">Reservation</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar;