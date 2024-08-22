import styled, { css } from 'styled-components';
import { Inner, Button } from './GlobalStyles';
import bgShortenMobile from '../images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../images/bg-shorten-desktop.svg';

export const UrlShortenerContainer = styled.div`
  padding-top: 5.625rem;
  position: relative;

  &:after {
    content: '';
    background-color: #fff;
    width: 100%; height: calc(50% + 5.625rem / 2);
    position: absolute;
    left: 0; top: 0;
    z-index: 0;
  }

  @media screen and (min-width: 769px) {
    padding-top: 2.5rem;

    &:after {
      height: calc(50% + 2.5rem / 2);
    }
  }
`;

export const UrlInner = styled(Inner)`
  position: relative;
  z-index: 1;
`;

export const Form = styled.form`
  background-color: var(--c-dark-violet);
  border-radius: 0.625rem;
  padding: 1.5rem;
  position: relative;
  z-index: 0;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    display: flex;
    align-items: flex-start;
    padding: 3.125rem 3.75rem;
  }
`;

export const FormBg = styled.div`
  background-image: url(${({ $bg }) => $bg});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 70% auto;
  mix-blend-mode: screen;
  opacity: 0.3;
  width: 100%; height: 100%;
  position: absolute;
  left: 0; top: 0;
  z-index: 1;

  @media screen and (min-width: 769px) {
    background-size: 100% 100%;
    display: flex;
  }
`

export const InputWrap = styled.div`
  @media screen and (min-width: 769px) {
    flex: 1;
  }
`;

const PlaceholderStyles = css`
  color: ${({ $error }) => ($error ? 'var(--c-red)' : 'var(--c-grayish-violet)')};
`;

export const UrlInput = styled.input`
  background-color: white;
  border-radius: 0.3rem;
  border: ${({ $error }) => ($error ? '2px solid var(--c-red)' : '0 none')};
  font-size: 1rem;
  display: block;
  width: 100%;
  position: relative;
  z-index: 2;
  
  &::placeholder {
    ${PlaceholderStyles}
  }
  &::-webkit-input-placeholder {
    ${PlaceholderStyles}
  }
  &::-ms-input-placeholder {
    ${PlaceholderStyles}
  }

  @media screen and (min-width: 769px) {
    padding: 1.1rem 2rem;
  }
`;

export const ErrorMsg = styled.p`
  color: var(--c-red);
  font-size: 0.75rem;
  font-style: italic;
  margin-top: 0.25rem;
  position: relative;
  z-index: 2;
`;

export const BtnShorten = styled(Button)`
  border-radius: 0.3rem;
  font-size: 1.2rem;
  width: 100%;
  margin-top: 0.85rem;
  padding: 0.75rem 0;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 769px) {
    border-radius: 0.625rem;
    font-size: 1rem;
    width: 11.75rem;
    margin-top: 0;
    margin-left: 1.5rem;
    padding: 1.1rem 0;
  }
`;