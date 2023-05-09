import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export function RevealItems(props) {
  const revealFromBottom = keyframes`
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    `;

  return (
    <Reveal
      keyframes={revealFromBottom}
      delay={props.delay}
      duration={1800}
      className={props.className}
      triggerOnce={true}
      onClick={props.onClick}
    >
      {props.children}
    </Reveal>
  );
}

export function RevealFromLeft(props) {
  const revealFromLeft = keyframes`
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    `;

  return (
    <Reveal
      keyframes={revealFromLeft}
      delay={props.delay}
      duration={1800}
      className={props.className}
      triggerOnce={true}
    >
      {props.children}
    </Reveal>
  );
}

export function RevealFromRight(props) {
  const revealFromRight = keyframes`
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    `;

  return (
    <Reveal
      keyframes={revealFromRight}
      delay={props.delay}
      duration={1800}
      className={props.className}
      id={props.id}
      triggerOnce={true}
      ref={props.ref}
    >
      {props.children}
    </Reveal>
  );
}
