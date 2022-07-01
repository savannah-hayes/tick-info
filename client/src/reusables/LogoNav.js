import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import TickInfoLogo from "../assets/markup-cropped.svg";
import { Header, Logo } from "styled-components/reusablesStyles";

const LogoNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
 

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      return console.log(location.pathname);
    } else {
      return navigate("/")
    }
  };

  return (
    <Header>
      <Logo src={TickInfoLogo} alt="Tick info logo" onClick={handleLogoClick}/>
    </Header>
  );
};

export default LogoNav;
