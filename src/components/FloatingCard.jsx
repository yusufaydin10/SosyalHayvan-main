import React  from "react";
import { twMerge } from "tailwind-merge";
import ReactParallaxTilt from "react-parallax-tilt";

const FloatingCard = ({
  leftBadge,
  rightBadge,
  children,
  className,
  ...rest
}) => {
  return (
    <ReactParallaxTilt
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      className={twMerge(
        "relative flex   flex-col  transition-all cursor-pointer hover:drop-shadow-lg",
        leftBadge != null && "ml-[25px] mt-[25px]",
        rightBadge != null && "mr-[25px] mt-[25px]",
        className
      )}
      {...rest}
    >
      {leftBadge != null && (
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
          {leftBadge}
        </div>
      )}
      {rightBadge != null && (
        <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2">
          {rightBadge}
        </div>
      )}
      <div className="mb-3 flex gap-1">
   
      </div>
      {children}
    </ReactParallaxTilt>
  );
};

export default FloatingCard;
