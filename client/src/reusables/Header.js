import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/markup-cropped.svg";
import { devices } from "styled-components/globalStyles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="Tick info logo" onClick={() => navigate("/")}/>
    </StyledHeader>
  );
};

export default Header;

export const StyledHeader = styled.header`
  height: 90px;
  
  @media ${devices.tablet}{
    height: 120px;
  }
`;

export const StyledLogo =  styled.img`
  height: 60px;
  width: 140px;
  margin: 10px 10px 0 0;

  @media ${devices.tablet}{
    height: 120px;
    width: 180px;
  }

  @media ${devices.desktop}{
    width: 200px;
  }
`;

