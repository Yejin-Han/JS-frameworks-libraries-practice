import { useState } from 'react';
import { HeroContainer, HeroImgWrap, HeroInner, HeroInfo, HeroTitle, HeroText, HeroButton } from '../assets/styles/HeroStyles';

import illustrationWorking from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImgWrap><img src={illustrationWorking} alt="" /></HeroImgWrap>
      <HeroInner>
        <HeroInfo>
          <HeroTitle>
            More than just <span className="br-769"></span>
            shorter links
          </HeroTitle>
          <HeroText>
            Build your brand's recognition and get detailed <span className="br-769"></span>
            insights on how your links are performing.</HeroText>
          <HeroButton>Get Started</HeroButton>
        </HeroInfo>
      </HeroInner>
    </HeroContainer>
  );
}

export default Hero;