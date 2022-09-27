import React from "react";
import { Container } from "../../GlobalStyles";
import {
  HeroBackground,
  HeroContainer,
  LeftColumn,
  HeroTitle,
  HeroSubtitle,
  HeroCTA,
  RightColumn,
  ImagesContainer,
  BackgroundShape,
  HeroImage,
  HeroStat,
  WavesImage,
} from "./HeroStyled";
import { heroVariants } from "../motionVariants";
import image1 from "../../assets/background1.jpg";
import image2 from "../../assets/background2.jpg";
import image3 from "../../assets/background4.jpg";
import waves from "../../assets/wave-haikei.svg";

function Hero() {
  return (
    <HeroBackground>
      <Container pt={"140px"}>
        <HeroContainer animate={{ staggerChildren: 0.3 }}>
          <LeftColumn
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle>
              Get paid for the <span style={{ color: "#3ee9e5" }}>work</span>{" "}
              you
              <span style={{ color: "#3ee9e5" }}> want</span> to do
            </HeroTitle>
            <HeroSubtitle>
              The 9-5 grind is so last century. We believe in living life on
              your own terms. Whether you’re looking to escape the rat race or
              set up a side hustle, we’ve got you covered.
            </HeroSubtitle>
            <HeroCTA></HeroCTA>
          </LeftColumn>
          <RightColumn
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ImagesContainer>
              <HeroImage src={image1} top={"30%"} left={"40%"} />
              <HeroImage src={image2} top={"50%"} left={"50%"} />
              <HeroImage src={image3} top={"70%"} left="60%" />
              <HeroStat top={"50%"} left={"50px"}>
                100+ <br /> Courses
              </HeroStat>
              <HeroStat top={"30%"} right={"0px"}>
                20+ <br />
                Subjects
              </HeroStat>
            </ImagesContainer>
            <BackgroundShape />
          </RightColumn>
        </HeroContainer>
      </Container>
      <WavesImage src={waves} />
    </HeroBackground>
  );
}

export default Hero;
