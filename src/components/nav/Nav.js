import React, { useState } from 'react';
import '../../assests/styles/Nav.scss';
import { Container } from '../../utils/Utils';
import logo from '../../assests/images/logo.jpg';
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
