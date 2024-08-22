import { BoostContainer, BoostInner, BoostBg, BoostTitle, BtnBoost } from '../assets/styles/BoostStyles';

const Boost = () => {
  return (
    <BoostContainer>
      <BoostInner>
        <BoostTitle>Boost your links today</BoostTitle>
        <BtnBoost>Get Started</BtnBoost>
        <BoostBg />
      </BoostInner>
    </BoostContainer>
  );
}

export default Boost;