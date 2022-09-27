import React, { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import {
  CardContainer,
  CardIcon,
  CardText,
  CardTitle,
  CardSubTitle,
} from "./InfoSectionStyled";

function CardElement({ icon, title, subtitle, id }) {
  const ref = useRef(null);
  const animation = useAnimation();
  const isInView = useInView(ref, { once: "true", amount: 0.5 });

  useEffect(() => {
    const windowSize = window.innerWidth > 1000 ? 0.1 * id : 0;
    if (isInView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 0.5, delay: `${windowSize}` },
      });
    }
  }, [isInView, animation, id]);

  const margin = id % 2 === 0 ? "true" : "";

  return (
    <CardContainer
      margin={margin}
      ref={ref}
      initial={{ x: "200", opacity: 0 }}
      animate={animation}
    >
      <CardIcon src={icon} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{subtitle}</CardSubTitle>
      </CardText>
    </CardContainer>
  );
}

export default CardElement;
