import React from "react";
import { Container } from "../../GlobalStyles";
import { FaqSpace, FaqContainer, FaqTitle } from "./FaqStyled";
import QuestionElement from "./QuestionElement";
import { data } from "./QuestionsData";

function Faq() {
  const QuestionsElements = data.map((question) => {
    return (
      <QuestionElement
        key={question.id}
        question={question.question}
        answer={question.answer}
      />
    );
  });

  return (
    <Container>
      <FaqSpace>
        <FaqTitle>FAQ</FaqTitle>
        <FaqContainer>{QuestionsElements}</FaqContainer>
      </FaqSpace>
    </Container>
  );
}

export default Faq;
