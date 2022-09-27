import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
    background: ${({ theme }) => theme.dark} ;
  }
  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style:none;
  }
  button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
`;

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  min-height: 400px;
  margin-inline: auto;
  padding: 1em;
  padding-top: ${({ pt }) => (pt ? pt : "")};
  display: grid;
  place-items: center;
  @media (min-width: 600px) {
    padding: 2em;
  }
`;
