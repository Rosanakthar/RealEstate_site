import {react , useRef} from 'react';
import { BiSearch } from 'react-icons/bi';
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navigation() {
  const navRef = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav"); 
  }
  return (
    <div className='header'>
      <h3>RealEstate</h3>
      <nav ref={navRef}>
        <Link to='/'><a>Rent</a></Link>
        <a href='#'>Buy</a>
        <a href='#'>Sell</a>
        <a href='#'>Management Property</a>
        <a href='#'>Resource</a>
        <a><button className='btn-log'>Login</button></a>
        <a><button className='btn'>Signin</button></a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navigation;
