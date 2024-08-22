import { FooterContainer, FooterInner, FooterLogo, FooterWrap, Nav, NavList, NavItem, NavItemTitle, NavSub, NavSubItem, NavLink, SnsList, SnsItem, SnsLink, SnsIcon } from '../assets/styles/FooterStyles';

import logo from '../assets/images/logo.svg';
import iconFacebook from '../assets/images/icon-facebook.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconPinterest from '../assets/images/icon-pinterest.svg';
import iconInstagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterLogo><img src={logo} alt="logo" /></FooterLogo>
        <FooterWrap>
          <Nav>
            <NavList>
              <NavItem>
                <NavItemTitle>Features</NavItemTitle>
                <NavSub>
                  <NavSubItem><NavLink>Link Shortening</NavLink></NavSubItem>
                  <NavSubItem><NavLink>Branded Links</NavLink></NavSubItem>
                  <NavSubItem><NavLink>Analytics</NavLink></NavSubItem>
                </NavSub>
              </NavItem>
              <NavItem>
                <NavItemTitle>Resources</NavItemTitle>
                <NavSub>
                  <NavSubItem><NavLink>Blog</NavLink></NavSubItem>
                  <NavSubItem><NavLink>Developers</NavLink></NavSubItem>
                  <NavSubItem><NavLink>Support</NavLink></NavSubItem>
                </NavSub>
              </NavItem>
              <NavItem>
                <NavItemTitle>Company</NavItemTitle>
                <NavSub>
                  <NavSubItem><NavLink>About</NavLink></NavSubItem>
                  <NavSubItem><NavLink>Our Team</NavLink></NavSubItem>
                  <NavSubItem><NavLink>Careers</NavLink></NavSubItem>
                  <NavSubItem><NavLink>Contact</NavLink></NavSubItem>
                </NavSub>
              </NavItem>
            </NavList>
          </Nav>
          <SnsList>
            <SnsItem><SnsLink><SnsIcon src={iconFacebook} alt="facebook"></SnsIcon></SnsLink></SnsItem>
            <SnsItem><SnsLink><SnsIcon src={iconTwitter} alt="twitter"></SnsIcon></SnsLink></SnsItem>
            <SnsItem><SnsLink><SnsIcon src={iconPinterest} alt="pinterest"></SnsIcon></SnsLink></SnsItem>
            <SnsItem><SnsLink><SnsIcon src={iconInstagram} alt="instagram"></SnsIcon></SnsLink></SnsItem>
          </SnsList>
        </FooterWrap>
      </FooterInner>
    </FooterContainer>
  );
}

export default Footer;