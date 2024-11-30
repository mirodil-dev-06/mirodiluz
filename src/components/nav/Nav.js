import React, { useState } from 'react';
import '../../assests/styles/Nav.scss';
import { Container } from '../../utils/Utils';
import logo from '../../assests/images/logo.jpg';
import { FaTelegram, FaInstagram, FaLinkedin, FaPhone, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import SideBar from '../sideBar/SideBar';

const Nav = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className='navbar'>
      <Container>
        <div className="nav__content">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav__item">
            <li className='nav__item-icon'>
              <a href="http://t.me/mirodil_0623" target='_blank' rel="noopener noreferrer">
                <FaTelegram />
              </a>
            </li>
            <li className='nav__item-icon'>
              <a href="https://www.instagram.com/mirodil_life/" target='_blank' rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li className='nav__item-icon'>
              <a href="https://www.linkedin.com/in/mirodil-mavlonov-34180128b/" target='_blank' rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li className='nav__item-icon'>
              <a href="tel:934211623" target='_blank' rel="noopener noreferrer">
                <FaPhone />
              </a>
            </li>
            <li className='nav__item-icon'>
              <a href="https://github.com/mirodil-dev-06" target='_blank' rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
          </ul>
          <ul className='nav__item'>
            <li className="nav__item-menu">
              <Link to="hero" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="nav__item-menu">
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className="nav__item-menu">
              <Link to="edu" smooth={true} duration={500}>Resume</Link>
            </li>
            <li className="nav__item-menu">
              <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
            </li>
            <li className="nav__item-menu">
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
          <button className="nav__content-bars" onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </div>
        {isSideBarOpen && <SideBar toggleSidebar={toggleSidebar} />}
      </Container>
    </div>
  );
};

export default Nav;
