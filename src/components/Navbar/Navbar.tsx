import { Link } from 'react-router-dom'

import './Navbar.css'

const navbar = () => {
  return (
    <div className="container"> 
      <nav>
        <div>
          <h1 className="nav__logo">Mardens Place</h1>
        </div>
        <ul className='nav__links'>
          <li className='link'><Link to="/booking-system/">Home</Link></li>
          <li className='link'><Link to="/about">About</Link></li>
          <li className='link'><Link to="/services">Services</Link></li>
          <li className='link'><Link  to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar