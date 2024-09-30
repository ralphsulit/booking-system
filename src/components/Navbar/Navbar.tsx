import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'

// import Button from '../Button/Button'

import './Navbar.css'


  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinksRef = useRef<HTMLUListElement>(null);
    const menuBtnIconRef = useRef<HTMLUListElement>(null);

    const handleMenuBtnClick = () => {
      setIsMenuOpen(!isMenuOpen);

      if (navLinksRef.current) {
        navLinksRef.current.classList.toggle('open');
      }

      if (menuBtnIconRef.current) {
        const isOpen = (navLinksRef.current as HTMLElement).classList.contains('open');
        menuBtnIconRef.current.setAttribute(
          'class', isOpen ? 'ri-close-line' : 'ri-menu-line'
        );
      }
    };

    return (
      <div className="container"> 
        <nav>
          <div className='nav__bar'>
            <h1 className="nav__logo">
              <Link className='link' to="/booking-system/">Mardens Place</Link>
            </h1>
            <div className="nav__menu__btn" id='menu-btn' onClick={handleMenuBtnClick}>
              <i ref={menuBtnIconRef} className="ri-menu-line"></i>
            </div>
          </div>
          <ul ref={navLinksRef} className='nav__links'>
            <li className='link'><Link to="/booking-system/">Home</Link></li>
            <li className='link'><Link to="/about">About</Link></li>
            <li className='link'><Link to="/services">Services</Link></li>
            <li className='link'><Link  to="/contact">Contact Us</Link></li>
          </ul>
          {/* <Button /> */}
        </nav>
      </div>
    )
  }

export default Navbar