import styled, { css } from 'styled-components';
import { Inner, Button } from './GlobalStyles';

export const LinkContainer = styled(Inner)`
  padding-top: 1.5rem;
`;

export const LinkLists = styled.ul``;

export const LinkItem = styled.li`
  background-color: white;
  border-radius: 0.3rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 961px) {
    font-size: 1.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem 1rem 1.875rem;
  }
`;

const TextOverflowStyles = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LinkOri = styled.p`
  border-bottom: 2px solid #f0f1f6;
  color: #333;
  padding: 0.75rem 1rem;
  ${TextOverflowStyles}

  @media screen and (min-width: 961px) {
    border-bottom: 0;
    padding: 0;
  }
`;

export const LinkCreated = styled.div`
  padding: 0.75rem 1rem;

  @media screen and (min-width: 961px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 10%;
    padding: 0;
  }
`;

export const LinkShort = styled.p`
  color: var(--c-cyan);
  ${TextOverflowStyles}

  @media screen and (min-width: 961px) {
    flex-shrink: 0;
  }
`;

export const BtnCopy = styled(Button)`
  background-color: ${({ $isCopied }) => ($isCopied ? 'var(--c-dark-violet)' : 'var(--c-cyan)')};
  border-radius: 0.3rem;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0;

  @media screen and (min-width: 961px) {
    flex-shrink: 0;
    width: 6rem;
    margin-top: 0;
    margin-left: 1.125rem;
  }
`;