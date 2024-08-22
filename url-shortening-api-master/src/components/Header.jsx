import { useState, useEffect } from 'react';
import { HeaderContainer, HeaderInner, HeaderLogo, Toggle, ToggleBar, Menu, MenuInner, Nav, NavList, NavItem, NavLink, Auth, Login, SignUp } from '../assets/styles/HeaderStyles';

import logo from '../assets/images/logo.svg';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleResize = () => {
    if(window.innerWidth >= 769) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLogo><img src={logo} alt="logo" /></HeaderLogo>
        <Toggle onClick={handleToggle} $navOpen={navOpen}>
          <ToggleBar></ToggleBar>
          <ToggleBar></ToggleBar>
          <ToggleBar></ToggleBar>
        </Toggle>
        <Menu $navOpen={navOpen}>
          <MenuInner>
            <Nav>
              <NavList>
                <NavItem><NavLink>Features</NavLink></NavItem>
                <NavItem><NavLink>Pricing</NavLink></NavItem>
                <NavItem><NavLink>Resources</NavLink></NavItem>
              </NavList>
            </Nav>
            <Auth>
              <Login>Login</Login>
              <SignUp as="a">Sign Up</SignUp>
            </Auth>
          </MenuInner>
        </Menu>
      </HeaderInner>
    </HeaderContainer>
  );
}

export default Header;