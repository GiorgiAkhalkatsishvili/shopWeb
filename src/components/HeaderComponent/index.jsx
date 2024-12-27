import React, { useState } from 'react';
import './HeaderComponent.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
  const [activeLink, setActiveLink] = useState('/');
  
  const cartItems = useSelector((state) => state.posts.cartItems);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='headerComponent'>
      <div className='image-section'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsvwfiL_PA52Zo1_Jt2ZaZ4kL8P3v_84Z3A&s"
          alt="Logo"
        />
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/"onClick={() => handleClick('/')}className={activeLink === '/' ? 'active' : ''}>Home
            </Link>
          </li>
          <li>
            <Link to="/about"onClick={() => handleClick('/about')}className={activeLink === '/about' ? 'active' : ''}>About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleClick('/contact')} className={activeLink === '/contact' ? 'active' : ''}
            >Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => handleClick('/cart')} className={activeLink === '/cart' ? 'active' : ''}
            >Cart
            </Link>
          </li>
        </ul>
      </div>

       <p>{cartItems?.length} items in cart</p>
    </div>
  );
};

export default HeaderComponent;
