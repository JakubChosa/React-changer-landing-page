import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

const theme = {
  almostBlack: "#1a1a1a",
  dark: "#080c20",
  primary: "#062c46",
  secondary: "#3ee9e5",
  color: "#fff",
  colorLight: "#777f98",
};

function App() {
  const [openModal, setOpenModal] = useState(false);

  function changeModalVisibility() {
    setOpenModal((prevState) => !prevState);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar changeModalVisibility={changeModalVisibility} />
      <Hero />
      <InfoSection />
      <Faq />
      <Footer changeModalVisibility={changeModalVisibility} />
      <AnimatePresence mode="wait">
        {openModal && <Modal changeModalVisibility={changeModalVisibility} />}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
