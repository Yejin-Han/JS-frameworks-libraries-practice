import styled from 'styled-components';
import { Inner, Button } from './GlobalStyles';

export const HeroContainer = styled.div`
  background-color: white;
  padding-top: 0.5rem; 
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    padding: 5rem 0;
  }
`;

export const HeroImgWrap = styled.div`
  width: 132.5%;
  margin: 0 auto;
  position: relative;
  right: -10%;

  @media screen and (min-width: 601px) {
    right: -15%;
  }

  @media screen and (min-width: 769px) {
    width: 60%;
    margin-left: 0;
    position: absolute;
    right: -17.5%; top: 50%; left: auto;
    z-index: 1;
    transform: translateY(-50%);
  }
`;

export const HeroInner = styled(Inner)`
  position: relative;
  z-index: 2;
`;

export const HeroInfo = styled.div`
  text-align: center;
  margin-top: 2.75rem;

  @media screen and (min-width: 769px) {
    text-align: left;
  }
`;

export const HeroTitle = styled.h2`
  color: var(--c-very-dark-blue);
  font-size: 2.575rem;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media screen and (min-width: 769px) {
    font-size: 3.25rem;
    letter-spacing: -1px;
  }

  @media screen and (min-width: 961px) {
    font-size: 4.5rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.125rem;
  margin-top: 1rem;

  @media screen and (min-width: 769px) {
    font-size: 1.1875rem;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 961px) {
    font-size: 1.25rem;
  }
`;

export const HeroButton = styled(Button)`
  border-radius: 3rem;
  font-size: 1.2rem;
  margin-top: 1.8rem;
  padding: 1rem 2.5rem;
`;
