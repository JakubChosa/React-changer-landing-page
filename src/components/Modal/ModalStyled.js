import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled(motion.div)`
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.almostBlack};
  width: 90%;
  max-width: 450px;
  padding: 1em;
  border-radius: 20px;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.2);
  display: grid;
  place-items: center;
  position: relative;
  @media (min-width: 600px) {
    padding: 2em;
  }
`;
export const CloseModal = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.3em;
  display: grid;
  place-items: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: all 0.3s linear;
  &:hover {
    scale: 1.1;
  }
`;

export const SingUpTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1em;
`;

export const SignUpForm = styled.form`
  width: 100%;
  max-width: 350px;
  display: grid;
  gap: 0.75em;
`;
export const SignUpLabel = styled.label`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bolder;
  margin-inline: auto;
`;
export const SignUpInput = styled.input`
  font-size: 1rem;
  width: 100%;
  max-width: 350px;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.6em;
  margin: 0.3em auto;
  border: none;
  border-radius: 5px;
`;

export const SignUpConnect = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  @media (min-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SignUpConnectSubtitle = styled.h3`
  font-size: 1rem;
  @media (min-width: 450px) {
    grid-column: span 2;
  }
`;
export const ConnectContainer = styled.div`
  padding: 0.2em 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border: 1px solid ${({ theme }) => theme.almostBlack};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px ${({ theme }) => theme.almostBlack};
  }
`;
export const ConnectIcon = styled.img`
  height: 40px;
  width: 40px;
`;

export const SignInContainer = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colorLight};
`;
export const SignIn = styled.a`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.almostBlack};
    text-shadow: 0px 0px 2px ${({ theme }) => theme.almostBlack};
  }
`;
export const SignUpSubmit = styled.button`
  background: ${({ theme }) => theme.almostBlack};
  color: ${({ theme }) => theme.color};
  font-weight: bolder;
  padding: 0.7em 1.5em;
  margin-inline: auto;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.almostBlack};
  }
`;
