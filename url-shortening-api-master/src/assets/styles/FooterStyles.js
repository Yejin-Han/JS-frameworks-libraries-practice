import styled, { css } from 'styled-components';
import { Inner, Button, Logo } from './GlobalStyles';

export const FooterContainer = styled.footer`
  background-color: var(--c-very-dark-violet);
  color: white;
  text-align: center;
`;

export const FooterInner = styled(Inner)`
  padding-top: 3.25rem;
  padding-bottom: 3.25rem;

  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 4.25rem;
    padding-bottom: 4.25rem;
  }
`;

export const FooterLogo = styled(Logo)`
  width: 7.75rem; height: 2.5rem;
  margin: 0 auto;

  img {
    filter: brightness(0) invert(100%) sepia(0%) saturate(7461%) hue-rotate(52deg) brightness(110%) contrast(109%);
  }

  @media screen and (min-width: 769px) {
    margin: 0;
  }
`;

export const FooterWrap = styled.div`
  margin-top: 3rem;

  @media screen and (min-width: 769px) {
    text-align: left;
    display: flex;
    margin-top: 0;
  }
`;

export const Nav = styled.div`
  
`;

export const NavList = styled.ul`
  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 769px) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 4rem;
    }
  }
`;

export const NavItemTitle = styled.strong`
  font-weight: 700;
`;

export const NavSub = styled.ul`
  color: var(--c-gray);
  letter-spacing: -0.5px;
  margin-top: 1.625rem;
`;

export const NavSubItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  @media (hover: hover) {
    transition: color 0.4s;

    &:hover {
      color: var(--c-cyan);
    }
  }

  @media screen and (min-width: 769px) {
    font-size: 0.875rem;
  }
`;

export const NavLink = styled.a`

`;

export const SnsList = styled.ul`
  margin-top: 2.125rem;

  @media screen and (min-width: 769px) {
    margin-top: 0;
    margin-left: 5.5rem;
  }
`;

export const SnsItem = styled.li`
  display: inline-block;
  
  &:not(:last-child) {
    margin-right: 1.25rem;
  }
`;

export const SnsLink = styled.a`
  display: block;
  width: 1.625rem; height: 1.625rem;
`;

export const SnsIcon = styled.img`
  width: 100%; height: 100%;
  object-fit: contain;

  @media (hover: hover) {
    transition: filter 0.4s;

    &:hover {
      filter: invert(6%) sepia(5%) saturate(6836%) hue-rotate(136deg) brightness(109%) contrast(93%);
    }
  }
`;