import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  padding: 6em 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const LeftColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 500px;
  text-align: center;
  @media (min-width: 750px) {
    margin-top: 0;
    align-items: left;
    text-align: left;
    max-width: 400px;
    padding-right: 1em;
  }
`;
export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.2;
`;
export const HeroSubtitle = styled.p`
  color: ${({ theme }) => theme.colorLight};
  margin-top: 1em;
`;
export const HeroCTA = styled.div``;

export const RightColumn = styled(motion.div)`
  display: none;
  place-items: center;
  width: clamp(200px, 90vw, 500px);
  height: 300px;
  position: relative;
  @media (min-width: 400px) {
    display: grid;
    place-items: center;
  }
  @media (min-width: 750px) {
    height: clamp(300px, 60vh, 600px);
  }
`;
export const BackgroundShape = styled.div`
  visibility: hidden;
  background: ${({ theme }) => theme.primary};
  width: 480px;
  border-top-left-radius: 240px;
  border-top-right-radius: 240px;
  position: absolute;
  /* bottom: 20%; */
  right: 0;
  rotate: -35deg;
  height: 1100px;
  z-index: -1;
  translate: 25% 16%;
  @media (min-width: 1000px) {
    visibility: visible;
  }
`;

export const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const HeroImage = styled.img`
  border-radius: 10px;
  aspect-ratio: 16/9;
  width: clamp(250px, 30vw, 330px);
  object-fit: cover;
  position: absolute;
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  translate: -50% -50%;
`;
export const HeroStat = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  color: ${({ theme }) => theme.color};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 0.6em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  text-align: center;
  width: 100px;
  position: absolute;
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  right: ${({ right }) => (right ? right : "")};
  translate: -50% -50%;
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`;
export const WavesImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100vw;
  z-index: -4;
`;
export const HeroBackground = styled.section`
  position: relative;
  overflow: hidden;
  /* min-height: 100vh; */
  display: grid;
  place-items: center;
`;
