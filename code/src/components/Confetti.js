import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../Lottie/confetti.json';

export const ConfettiLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <>{<Lottie options={defaultOptions} height={300} width={334} />}</>;
};
