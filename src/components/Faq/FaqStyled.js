import { motion } from "framer-motion";
import styled from "styled-components";

export const FaqSpace = styled.div`
  width: clamp(250px, 80vw, 700px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  text-align: center;
  margin: 4em auto 12em;
  @media (min-width: 1000px) {
    margin-top: 16em;
  }
`;
export const FaqContainer = styled.div`
  font-size: 1.1rem;
  height: auto;
  width: 100%;
  display: grid;
  gap: 0.5em;
`;
export const FaqTitle = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  line-height: 1.2;
`;

export const QuestionContainer = styled.div`
  color: ${({ theme }) => theme.color};
  border-top: 1px solid ${({ theme }) => theme.colorLight};
  text-align: center;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colorLight};
  }
  &:first-child {
    border-top: 2px solid ${({ theme }) => theme.colorLight};
  }
`;
export const Question = styled.div`
  max-width: 400px;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
export const Answer = styled(motion.div)`
  color: ${({ theme }) => theme.colorLight};
  max-width: 550px;
`;
export const Icon = styled.div`
  font-size: 1.2rem;
  margin-left: 1.5em;
  display: grid;
  place-items: center;
`;
