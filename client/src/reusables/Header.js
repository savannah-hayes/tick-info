import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import TickInfoLogo from "../assets/markup-cropped.svg";
import {
  NavContainer,
  NavWrapper,
  HamburgerMenu,
  Link,
  Logo
} from "styled-components/reusablesStyles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburgerMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const navigate = useNavigate();
  const homePath = location.pathname === "/"; 

  const routes = [
    { key: 1, pathname: "/account", title: "Account" },
    { key: 2, pathname: "/images", title: "Images" },
    { key: 3, pathname: "/map", title: "Map" },
    { key: 4, pathname: "/resources", title: "Resources" },
  ];

  const routesLinkedToAccount = ["/card", "/reminder", "/register"]

  useEffect(() => {
    setIsOpen(!isOpen);
    // eslint-disable-next-line 
  }, [location]);

  if (routesLinkedToAccount.includes(location.pathname)) {
    return <Logo src={TickInfoLogo} alt="Tick info logo" onClick={() => navigate("/account")} />
  }

  return (
    <>
      <NavContainer>
        <Logo 
          src={TickInfoLogo} 
          alt="Tick info logo"
          removePointer={homePath} 
          onClick={() => homePath ? null : navigate("/")} 
        />
        <HamburgerMenu isOpen={isOpen} onClick={toggleHamburgerMenu}>
          <span />
          <span />
          <span />
        </HamburgerMenu>
      </NavContainer>
      <NavWrapper isOpen={isOpen}>
        {routes.map((route) => {
          return <Link key={route.key} to={route.pathname}>{route.title}</Link>
        })}
      </NavWrapper>
    </>
  )
};

export default Header;
