import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterBackground = styled.footer`
  background: ${({ theme }) => theme.primary};
  height: auto;
  min-height: 100px;
  width: 100%;
  padding-top: 8em;
  display: grid;
  place-items: center;
  position: relative;
`;
export const FooterContainer = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  padding-inline: 2em;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const Column = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding-bottom: 2em;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
export const Logo = styled(motion.h3)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colorLight};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color};
    scale: 1.1;
  }
`;
export const Socials = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1em;
`;
export const Link = styled(motion.a)`
  color: ${({ theme }) => theme.colorLight};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: ${({ theme }) => theme.color};
    scale: 1.1;
  }
`;
export const MoreInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
export const SingUpContainer = styled(motion.div)`
  background: ${({ theme }) => theme.almostBlack};
  height: auto;
  width: clamp(250px, 80vw, 600px);
  border-radius: 25px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% -50%;
  @media (min-width: 600px) {
    flex-direction: row;
    height: 150px;
  }
`;

export const SignUpText = styled.p`
  font-size: 1.1rem;
  width: 100%;
  color: ${({ theme }) => theme.color};
  text-align: center;
  @media (min-width: 600px) {
    text-align: left;
  }
`;
