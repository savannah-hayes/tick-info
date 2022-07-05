import React, { useState } from "react";

import TickInfoLogo from "../assets/markup-cropped.svg";
import { 
  NavContainer, 
  Logo, 
  Nav,
  NavLink
} from "styled-components/reusablesStyles";

const LogoNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => setIsOpen(!isOpen);

  return (
     <NavContainer>
      <Logo src={TickInfoLogo} alt="Tick info logo" onClick={handleLogoClick} />
      <Nav isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(!isOpen)}> Home</NavLink>
        <NavLink to="/account" onClick={() => setIsOpen(!isOpen)}> Profile</NavLink>
        <NavLink to="/card" onClick={() => setIsOpen(!isOpen)}> Vaccine Card</NavLink>
        <NavLink to="/resources" onClick={() => setIsOpen(!isOpen)}> Resources</NavLink>
      </Nav>
    </NavContainer>
  );
};

export default LogoNav;
