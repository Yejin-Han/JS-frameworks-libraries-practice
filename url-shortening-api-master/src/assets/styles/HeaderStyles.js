import styled, { css } from 'styled-components';
import { Inner, Button, Logo } from './GlobalStyles';

export const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  position: fixed;
  left: 0; top: 0;
  z-index: 1000;
`;

export const HeaderInner = styled(Inner)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.375rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 769px) {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;

export const HeaderLogo = styled(Logo)`
  width: 7.625rem; height: 2.25rem;

  @media screen and (min-width: 769px) {
    flex-shrink: 0;
    width: 7.875rem; height: 3rem;
    margin-right: 2.5rem;
  }
`;

export const Toggle = styled.button`
  width: 1.5625rem; height: 1.125rem;
  position: relative;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const ToggleBar = styled.span`
  background-color: var(--c-grayish-violet);
  display: block;
  width: 100%; height: 0.1875rem;
  position: absolute;
  transition: all 0.4s;

  &:nth-child(1) {
    top: ${({ $navOpen }) => ($navOpen ? '50%' : '0')};
    transform: ${({ $navOpen }) => ($navOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:nth-child(2) {
    top: 50%;
    display: ${({ $navOpen }) => ($navOpen ? 'none' : 'block')};
  }

  &:nth-child(3) {
    top: ${({ $navOpen }) => ($navOpen ? '50%' : '100%')};
    transform: ${({ $navOpen }) => ($navOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

export const Menu = styled.div`
  background-color: var(--c-dark-violet);
  border-radius: 0.625rem;
  color: white;
  display: grid;
  grid-template-rows: ${({ $navOpen }) => ($navOpen ? '1fr' : '0fr')};
  width: calc(100% - 3rem);
  position: absolute;
  left: 50%; top: calc(100% + 0.5rem);
  transform: translateX(-50%);
  transition: grid-template-rows 0.5s ease-out;

  @media screen and (min-width: 769px) {
    background-color: transparent;
    color: var(--c-grayish-violet);
    flex: 1;
    display: block;
    width: auto;
    position: static;
    transform: none;
    transition: none; ?dlrjs anjdla dlrp Rnadlsrjdla??? thfmaehedk
  }
`;

export const MenuInner = styled(Inner)`
  font-size: 1.125rem;
  font-weight: 700;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;

export const Nav = styled.nav`
  text-align: center;
  padding-top: 2.875rem;

  @media screen and (min-width: 769px) {
    padding-top: 0;
  }
`;

export const NavList = styled.ul`
  border-bottom: 1px solid rgba(158, 154, 167, 0.3);

  @media screen and (min-width: 769px) {
    display: flex;
    border-bottom: 0;
  }
`;

export const NavItem = styled.li`
  margin-bottom: 2.125rem;

  @media screen and (min-width: 769px) {
    margin-bottom: 0;
    
    &:not(:last-child) {
      margin-right: 1.8rem;
    }
  }
`;

export const NavLink = styled.a`
  transition: color 0.4s;

  @media (hover: hover) {
    &:hover {
      color: var(--c-very-dark-blue);
    }
  }
`;

export const Auth = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.5rem;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: flex-end;
    padding-bottom: 0;
  }
`;

const headerButtonStyles = css`
  border-radius: 3.25rem;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 0;

  @media screen and (min-width: 769px) {
    margin-top: 0;
    width: 7.25rem;
    padding: 0.5rem 0;
  }
`;

export const Login = styled.a`
  ${headerButtonStyles}
`;

export const SignUp = styled(Button)`
  ${headerButtonStyles}

  @media screen and (min-width: 769px) {
    flex-shrink: 0;
  }
`;