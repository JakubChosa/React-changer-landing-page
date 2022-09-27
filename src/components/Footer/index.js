import React, { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import {
  FooterBackground,
  FooterContainer,
  Column,
  Logo,
  Socials,
  Link,
  MoreInfo,
  SingUpContainer,
  SignUpText,
} from "./FooterStyled";
import { SignUp } from "../Navbar/NavbarStyled";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer({ changeModalVisibility }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: "true", amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      controls.start({ y: 100, scale: 0.2 });
    }
    if (isInView) {
      controls.start({
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 13,
          delay: 0.3,
        },
      });
    }
  }, [isInView, controls]);

  return (
    <FooterBackground>
      <FooterContainer>
        <Column>
          <Logo>© Changer</Logo>
          <MoreInfo>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
          </MoreInfo>
        </Column>
        <Column>
          <Socials>
            <Link>
              <FaFacebook fontSize={"1.2rem"} />
            </Link>
            <Link>
              <FaInstagram fontSize={"1.2rem"} />
            </Link>
            <Link>
              <FaYoutube fontSize={"1.2rem"} />
            </Link>
          </Socials>
        </Column>
      </FooterContainer>
      <SingUpContainer ref={ref} animate={controls}>
        <SignUpText>
          Did something spike your interest? Do you want to learn new skill?{" "}
        </SignUpText>
        <SignUp position="initial" onClick={changeModalVisibility}>
          Sing Up!
        </SignUp>
      </SingUpContainer>
    </FooterBackground>
  );
}
