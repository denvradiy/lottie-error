import React from 'react';
import Lottie from "lottie-react";
import FacewithHorns from "./test-lottie.json";

function LottieComp() {
  return (
    <Lottie animationData={FacewithHorns} loop={true}/>
  );
}

export default LottieComp;