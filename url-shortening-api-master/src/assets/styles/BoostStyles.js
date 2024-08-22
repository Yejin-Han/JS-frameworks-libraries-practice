import styled, { css } from 'styled-components';
import { Inner, Button } from './GlobalStyles';

import bgBoostMobile from '../images/bg-boost-mobile.svg';
import bgBoostDesktop from '../images/bg-boost-desktop.svg';

export const BoostContainer = styled.div`
  background-color: var(--c-dark-violet);
  color: white;
  text-align: center;
  padding-top: 5.5rem;
  padding-bottom: 4.5rem;
  position: relative;

  @media screen and (min-width: 769px) {
    padding-top: 4.25rem;
    padding-bottom: 3.625rem;
  }
`;

export const BoostInner = styled(Inner)``;

export const BoostBg = styled.div`
  background: url(${bgBoostMobile}) no-repeat right top / 100% 100%;
  mix-blend-mode: screen;
  opacity: 0.3;
  width: 100%; height: 100%;
  position: absolute;
  left: 0; top: 0;
  z-index: 1;
  
  @media screen and (min-width: 769px) {
    background-image: url(${bgBoostDesktop});
  }
`;

export const BoostTitle = styled.h3`
  font-size: 1.625rem;
  font-weight: 700;
  position: relative;
  z-index: 2;
  
  @media screen and (min-width: 769px) {
    font-size: 2.25rem;
  }
`;

export const BtnBoost = styled(Button)`
  border-radius: 3rem;
  font-size: 1.2rem;
  margin-top: 1.8rem;
  padding: 1rem 2.5rem;
  position: relative;
  z-index: 2;
`;