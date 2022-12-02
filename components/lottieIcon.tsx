import Lottie from 'react-lottie-player';

type LottieIconProps = {
  jsonFilePath: object;
  width: number ;
  height: number;
}

type LottieIconState = {
  isHover: boolean;
}

const LottieIcon = ({ jsonFilePath, width, height }: LottieIconProps) => { 
  return (
    <Lottie
      animationData={jsonFilePath}
      play
      style={{ width: width, height: height }}
    />
  )
}

export default LottieIcon;