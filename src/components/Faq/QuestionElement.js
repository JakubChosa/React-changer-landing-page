import React, { useState } from "react";
import { QuestionContainer, Question, Answer, Icon } from "./FaqStyled";
import { questionVariants } from "../motionVariants";
import { AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

function QuestionElement({ question, answer, id }) {
  const [isVisible, setIsVisible] = useState(false);
  function switchVisibility() {
    setIsVisible((prevState) => !prevState);
  }
  return (
    <QuestionContainer>
      <Question onClick={switchVisibility}>
        <span>{question}</span>{" "}
        <Icon>
          <IoIosArrowDown />
        </Icon>
      </Question>
      <AnimatePresence mode="wait">
        {isVisible && (
          <Answer
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {answer}
          </Answer>
        )}
      </AnimatePresence>
    </QuestionContainer>
  );
}

export default QuestionElement;
