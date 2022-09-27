import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  width: clamp(280px, 90vw, 360px);
  background: ${({ theme }) => theme.almostBlack};
  color: ${({ theme }) => theme.colorLight};
  padding: 2em;
  padding-inline: 1em;
  margin-inline: auto;
  border: 6px solid
    ${({ special, theme }) => (special ? theme.secondary : theme.colorLight)};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 250px;
    gap: 2rem;
    padding-inline: 2em;
  }
`;
export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap === "true" ? "0.8em" : "")};
  @media (min-width: 1000px) {
    width: auto;
    align-items: center;
  }
`;
export const CardSubscription = styled.h3`
  text-transform: uppercase;
  font-size: 1.2rem;
  background: ${({ theme }) => theme.almostBlack};
  color: ${({ theme }) => theme.color};
`;
export const CardSubscriptionTime = styled.div``;

export const CardPrice = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 1.2rem;
`;

export const PurchaseButton = styled.a`
  width: 120px;
  background: ${({ special, theme }) => (special ? theme.secondary : "")};
  color: ${({ special, theme }) => (special ? theme.almostBlack : "")};
  font-weight: bolder;
  text-align: center;
  padding: 0.6em 1.5em;
  margin-bottom: 1em;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.almostBlack};
    border: 1px solid ${({ theme }) => theme.color};
    box-shadow: 0 0 3px ${({ theme }) => theme.color};
  }
`;
export const CardPros = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  line-height: 1.2;
`;
export const CardProsCheck = styled.img`
  height: 15px;
  width: 15px;
`;
