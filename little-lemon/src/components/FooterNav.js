import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

function FooterNav() {
    return (
        <div className='grid grid-cols-8 gap-4 px-16 pt-24'>
            <div className='col-span-2 relative'>
                <img src={logo} alt='Logo' className='pt-4'/>
            </div>
            <div>
                <div className='flex flex-col'>
                <h6 className='text-xs font-bold'>About</h6>
                <Link to="/about" className='text-xs/6 font-light'>About</Link>
                <Link to="/menu" className='text-xs/6 font-light'>Menu</Link>
                <Link to="/reservation" className='text-xs/6 font-light'>Reservation</Link>
                <Link to="/login" className='text-xs/6 font-light'>Login</Link>
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
                <h6 className='text-xs font-bold'>Contact</h6>
                <h1 className='text-xs/6 font-light'>tel:05189255</h1>
                <h1 className='text-xs/6 font-light'>email:lemon@email.com</h1>
                </div>
            </div>
            <div>
            <div className='flex flex-col'>
                <h6 className='text-xs font-bold'>Social Media</h6>
                <Link to="https://www.facebook.com/" className='text-xs/6 font-light'>Facebook</Link>
                <Link to="https://www.instagram.com/" className='text-xs/6 font-light'>Instagram</Link>
                <Link to="https://www.youtube.com/" className='text-xs/6 font-light'>Youtube</Link>
            </div>
            </div>

        </div>
    )
}

export default FooterNav;