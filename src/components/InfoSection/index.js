import React from "react";
import { Container } from "../../GlobalStyles";
import CardElement from "./CardElement";
import { cardData, priceData } from "./data";
import {
  InfoBackground,
  GridContainer,
  PricingTitle,
  PricingContainer,
} from "./InfoSectionStyled";
import PricingCard from "./PricingCard";

function InfoSection() {
  const cardElements = cardData.map((card) => {
    return (
      <CardElement
        key={card.id}
        id={card.id}
        icon={card.icon}
        title={card.title}
        subtitle={card.subtitle}
      />
    );
  });
  const priceElements = priceData.map((priceCard) => {
    return (
      <PricingCard
        key={priceCard.id}
        id={priceCard.id}
        subscription={priceCard.subscription}
        time={priceCard.time}
        price={priceCard.price}
        pros1={priceCard.pros1}
        pros2={priceCard.pros2}
        special={priceCard.special}
      />
    );
  });
  return (
    <InfoBackground>
      <Container>
        <GridContainer animate={{ staggerChildren: 0.3 }}>
          {cardElements}
        </GridContainer>
        <PricingTitle>Our Pricing</PricingTitle>
      </Container>
      <PricingContainer>{priceElements}</PricingContainer>
    </InfoBackground>
  );
}

export default InfoSection;
