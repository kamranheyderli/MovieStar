import React, { useState, useEffect } from 'react';
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { routing } from "../helpers/routing";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hamClick = () => {
    setOpen(!open);
  }

  return (
    <header className={` ${isScrolled ? 'fixed' : ''}`}>
      <div className="container">
        <div className="head">
          <span><BsTelephone />051-662-15-99</span>
        </div>
        <div className="all_header">
          <div className="logo">
            <img src="https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2018/02/logo.svg" alt="" />
          </div>
          <ul>
            {routing.map(route => (
              <li key={route.id}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
          <div className="hamburger">
            <GiHamburgerMenu onClick={hamClick} className='hambuger_icon' />
          </div>
          <div className={`mobile_menu ${open ? "active" : ""}`}>
            <ul>
              {routing.map(route => (
                <li key={route.id}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
