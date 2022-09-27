import React, { useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseModal,
  SingUpTitle,
  SignUpForm,
  SignUpLabel,
  SignUpInput,
  SignUpConnect,
  SignUpConnectSubtitle,
  ConnectContainer,
  ConnectIcon,
  SignInContainer,
  SignIn,
  SignUpSubmit,
} from "./ModalStyled";
import { AiOutlineClose } from "react-icons/ai";
import { jumpingVariants } from "../motionVariants";
import facebookIcon from "../../assets/icons8-facebook.svg";
import googleIcon from "../../assets/icons8-google.svg";

function Modal({ changeModalVisibility }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function createAccount(e) {
    e.preventDefault();
    console.log(name, email);
    setIsLoading((prevState) => !prevState);
    setTimeout(() => {
      setIsLoading((prevState) => !prevState);
      changeModalVisibility();
    }, 2000);
  }

  return (
    <ModalBackground onClick={changeModalVisibility}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        variants={jumpingVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <CloseModal>
          <AiOutlineClose onClick={changeModalVisibility} />
        </CloseModal>
        <SingUpTitle>Start Learning!</SingUpTitle>
        <SignUpForm onSubmit={(e) => createAccount(e)}>
          <SignUpLabel>
            Name
            <SignUpInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </SignUpLabel>
          <SignUpLabel>
            Email
            <SignUpInput
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </SignUpLabel>
          <SignUpLabel>
            Password
            <SignUpInput
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </SignUpLabel>
          <SignUpConnect>
            <SignUpConnectSubtitle>
              Do you want to connect your accounts?
            </SignUpConnectSubtitle>
            <ConnectContainer>
              <ConnectIcon src={facebookIcon} />
              <span>Facebook</span>
            </ConnectContainer>
            <ConnectContainer>
              <ConnectIcon src={googleIcon} />
              <span>Google</span>
            </ConnectContainer>
          </SignUpConnect>
          <SignInContainer>
            <span>Already have account ? </span>
            <SignIn>Sign In</SignIn>
          </SignInContainer>
          <SignUpSubmit>
            {isLoading ? "Loading..." : "Create Account"}
          </SignUpSubmit>
        </SignUpForm>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
