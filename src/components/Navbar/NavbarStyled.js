import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainer = styled(motion.nav)`
  width: 100%;
  max-width: 1100px;
  padding-inline: 1em;
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
  z-index: 10;
  @media (min-width: 600px) {
    align-items: center;
    flex-direction: row;
    padding-inline: 2em;
  }
`;
export const NavLogo = styled(motion.h3)`
  margin-top: 0.4em;
  color: ${({ theme }) => theme.color};
  font-size: x-large;
  font-style: italic;
  @media (min-width: 600px) {
    margin-top: 0;
  }
`;
export const NavMenu = styled.div`
  align-self: center;
  display: flex;
`;
export const NavMenuItem = styled.a`
  color: ${({ theme }) => theme.color};
  padding: 0.5em 0.8em;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.primary};
    text-shadow: 0 0 2px ${({ theme }) => theme.color};
  }
  @media (min-width: 600px) {
    padding: 0.5em 1.2em;
  }
`;
export const SignUp = styled.button`
  background: ${({ theme }) => theme.secondary};
  font-weight: bolder;
  min-width: 130px;
  padding: 0.6em 1.4em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: ${({ position }) => (position ? position : "absolute")};
  top: 5px;
  right: 10px;
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.color};
    font-weight: bold;
    background: ${({ theme }) => theme.color};
  }

  @media (min-width: 600px) {
    position: initial;
  }
`;
