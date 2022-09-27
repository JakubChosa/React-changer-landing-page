import React from "react";
import {
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavMenuItem,
  SignUp,
} from "./NavbarStyled";
import { navbarVariants } from "../motionVariants";

function Navbar({ changeModalVisibility }) {
  return (
    <NavbarContainer
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NavLogo>Changer</NavLogo>
      <NavMenu>
        <NavMenuItem>Courses</NavMenuItem>
        <NavMenuItem>Contact</NavMenuItem>
        <NavMenuItem>Get Pro</NavMenuItem>
      </NavMenu>
      <SignUp onClick={changeModalVisibility}>Sign Up</SignUp>
    </NavbarContainer>
  );
}

export default Navbar;
