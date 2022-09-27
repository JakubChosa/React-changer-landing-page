import React, { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import {
  Card,
  Column,
  CardSubscription,
  CardSubscriptionTime,
  CardPrice,
  PurchaseButton,
  CardPros,
  CardProsCheck,
} from "./PricingCardStyled";
import check from "../../assets/icon-check.svg";

function PricingCard(props) {
  const { subscription, time, price, pros1, pros2, special, id } = props;
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
  return (
    <Card
      special={special}
      ref={ref}
      initial={{ x: 200, opacity: 0 }}
      animate={animation}
    >
      <Column gap="true">
        <CardSubscription>{subscription}</CardSubscription>
        <CardSubscriptionTime>{time}</CardSubscriptionTime>
        <CardPrice>
          {price} {price === "199$" ? "" : "/ Monthly"}
        </CardPrice>
      </Column>
      <Column>
        <PurchaseButton special={special}>Purchase</PurchaseButton>
        <CardPros>
          <CardProsCheck src={check} />
          {pros1}
        </CardPros>
        <CardPros>
          <CardProsCheck src={check} />
          {pros2}
        </CardPros>
      </Column>
    </Card>
  );
}

export default PricingCard;
