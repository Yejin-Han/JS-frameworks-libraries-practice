import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  main {
    background-color: #f0f1f6;
    min-height: 100%;
    padding-top: 5.625rem;
  }

  span.br-769 {
    display: inline;
  }

  @media screen and (min-width: 769px) {
    main {
      padding-top: 8rem;
    }

    span.br-769 {
      display: block;
    }
  }
`;

export const Inner = styled.div`
  padding: 0 1.5rem;
  
  @media screen and (min-width: 769px) {
    max-width: 1160px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1160px) {
    max-width: 1112px;
    padding: 0;
  }
`;

export const Button = styled.button`
  background-color: var(--c-cyan);
  border-radius: 0.625rem;
  color: white;
  font-weight: 700;

  @media (hover: hover) {
    transition: background-color 0.4s;

    &:hover {
      background-color: hsl(180, 66%, 64%);
    }
  }
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`