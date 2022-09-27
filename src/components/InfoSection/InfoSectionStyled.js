import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoBackground = styled.div`
  background: ${({ theme }) => theme.primary};
  padding-top: 4em;
  padding-bottom: 8em;
  position: relative;
`;
export const GridContainer = styled(motion.div)`
  display: grid;
  justify-content: center;
  gap: 2em;
  margin-bottom: 4em;
  position: relative;
  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }
`;
export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2em;
  @media (min-width: 600px) {
    flex-direction: row;
    margin-left: ${({ margin }) => (margin === "true" ? "3em" : "")};
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: ${({ margin }) => (margin === "true" ? "3em" : "")};
  }
`;
export const CardIcon = styled.img`
  height: 120px;
  width: 100px;
  aspect-ratio: 1/1;
  background: ${({ theme }) => theme.dark};
  border-radius: 20px;
  padding: 1em;
  margin-bottom: 2em;
  object-fit: scale-down;
  @media (min-width: 1000px) {
    height: auto;
    width: 150px;
    aspect-ratio: 1/1;
  }
`;
export const CardText = styled.div`
  max-width: 400px;
`;
export const CardTitle = styled.p`
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;
`;
export const CardSubTitle = styled.p`
  color: ${({ theme }) => theme.colorLight};
`;
export const PricingTitle = styled.h2`
  color: ${({ theme }) => theme.color};
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  line-height: 1.2;
  @media (min-width: 1000px) {
    margin: 2em;
  }
`;
export const PricingContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
  display: grid;
  gap: 1em;

  @media (min-width: 1000px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 50%;
    grid-template-columns: repeat(3, minmax(150px, 300px));
  }
`;
