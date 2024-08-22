import styled, { css } from 'styled-components';
import { Inner, Button } from './GlobalStyles';

export const AdvancedStatisticsContainer = styled(Inner)`
  text-align: center;
  padding-top: 5.75rem;
  padding-bottom: 5.5rem;

  @media screen and (min-width: 769px) {
    padding-top: 7.875rem;
    padding-bottom: 7.5rem;
  }
`;

export const Title = styled.h3`
  color: var(--c-very-dark-violet);
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media screen and (min-width: 769px) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  margin-top: 1.5rem;
  
  @media screen and (min-width: 769px) {
    font-size: 1.125rem;
    line-height: 1.7;
  }
`;

export const StatisticsList = styled.ul`
  margin-top: 6rem;
  
  @media screen and (min-width: 861px) {
    display: flex;
    align-items: flex-start;
    margin-top: 6.4375rem;
  }
`;

export const StatisticsItem = styled.li`
  background-color: white;
  border-radius: 0.3rem;
  padding: 5.3125rem 1.7rem 2.5rem;
  position: relative;
  
  &:not(:last-child) {
    margin-bottom: 5.625rem;
  }
  &:not(:last-child):after {
    content: '';
    background-color: var(--c-cyan);
    display: block;
    width: 0.5rem; height: 5.625rem;
    position: absolute;
    left: 50%; top: 100%;
    transform: translateX(-50%);
  }
  
  @media screen and (min-width: 861px) {
    text-align: left;
    padding: 5.25rem 2rem 2.625rem;

    &:nth-child(2) {
      margin-top: 2.75rem;
    }

    &:nth-child(3) {
      margin-top: 5.5rem;
    }

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 2rem;
    }

    &:not(:last-child):after {
      width: 2rem; height: 0.5rem;
      left: auto; right: -2rem; top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const DetailImg = styled.div`
  background-color: var(--c-dark-violet);
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%;
  width: 5.625rem; height: 5.625rem;
  position: absolute;
  left: 50%; top: -2.8125rem;
  transform: translateX(-50%);

  ${StatisticsItem}:nth-child(1) & {
    background-image: url(${({ $bgBR }) => $bgBR});
  }
  ${StatisticsItem}:nth-child(2) & {
    background-image: url(${({ $bgDR }) => $bgDR});
  }
  ${StatisticsItem}:nth-child(3) & {
    background-image: url(${({ $bgFC }) => $bgFC});
  }

  @media screen and (min-width: 861px) {
    left: 2rem;
    transform: none;
  }
`;

export const DetailTitle = styled.h4`
  color: var(--c-very-dark-violet);
  font-size: 1.375rem;
  font-weight: 700;
`;

export const DetailText = styled.p`
  line-height: 1.6;
  margin-top: 1.35rem;

  @media screen and (min-width: 861px) {
    letter-spacing: -0.5px;
  }
`;