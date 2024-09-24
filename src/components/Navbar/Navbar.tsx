import { Link } from 'react-router-dom'

import './Navbar.css'

const navbar = () => {
  return (
    <div className="container"> 
      <nav>
        <div className="logo">
          <h1>Mardens Place</h1>
        </div>
        <ul>
          <li><Link to="/booking-system/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <button>Book now</button>
      </nav>
    </div>
  )
}

export default navbar