import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../reusables/Header";

import house from "../assets/house.svg";
import bell from "../assets/bell.svg";
import clipBoard from "../assets/clipboard.svg";
import dots from "../assets/dots.svg";
import signOut from "../assets/log-out.svg";

import {
  AccountWrapper,
  CapitalizeName,
  HeaderContainer,
  Iconimages,
  CapitalizeFullName,
  IconsContainer,
  HomeIcon,
  ReminderIcon,
  VaccineIcon,
  EditIcon,
  SignOutIcon
} from "../styled-components/accountStyles"

const Account = ({ setMode, setMethod, setLoggedIn, setEditAccount, totalDoses }) => {
  const navigate = useNavigate();

  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;
  const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
  const lastName = JSON.parse(localStorage.getItem("user"))?.lastName;
  const email = JSON.parse(localStorage.getItem("user"))?.email;
  const userId = JSON.parse(localStorage.getItem("user"))?.userId;

  const handleSignOut = () => {
    const keysToRemove = ["user", "dose", "allDoses"];
    keysToRemove.forEach(key => localStorage.removeItem(key));
    setLoggedIn(false);
    navigate("/");
  };

  const handleEditUser = () => {
    setMode(`user/${userId}`);
    setMethod("PUT");
    setEditAccount(true);
    navigate("/register");
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  return (
    <>
      <Header />
      <AccountWrapper>
        <HeaderContainer>
          <h1>Hello, <CapitalizeName>{firstName}</CapitalizeName></h1>
          <div>
            <CapitalizeFullName>{firstName} {lastName}</CapitalizeFullName>
            <p>{email}</p>
            <p>Doses Taken: {totalDoses}</p>
          </div>
        </HeaderContainer>
        <hr />
        <IconsContainer>
          <HomeIcon onClick={() => navigate("/")}> <Iconimages src={house} alt="home icon"></Iconimages> Home</HomeIcon>
          <ReminderIcon onClick={() => navigate("/reminder")}> <Iconimages src={bell} alt="bell icon"></Iconimages> Reminder</ReminderIcon>
          <VaccineIcon onClick={() => navigate("/card")}> <Iconimages src={clipBoard} alt="clipboard icon"></Iconimages> Vaccine card</VaccineIcon>
          <EditIcon onClick={handleEditUser}> <Iconimages src={dots} alt="three dots icon"></Iconimages>Edit profile</EditIcon>
          <SignOutIcon onClick={handleSignOut}> <Iconimages src={signOut} alt="sign out icon"></Iconimages> Sign out</SignOutIcon>
        </IconsContainer>
      </AccountWrapper>
    </>
  );
};

export default Account;
