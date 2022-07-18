import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../reusables/Header";
import UserForm from "../reusables/UserForm";

import { registerOrEditUser } from "../actions/userActions";

import { FormContainer, StyledHeading } from "../styled-components/loginStyles"
import { Spinner } from "../styled-components/mainStyles";

const Register = ({ mode, method, editAccount }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onRegisterOrEditUser = (event) => {
    event.preventDefault();
    registerOrEditUser(firstName, lastName, email, password, mode, method, setLoading, setErrorMessage, navigate)
  };

  return loading
    ? <Spinner></Spinner>
    : <>
      <Header />
      <FormContainer>
        <StyledHeading>{editAccount ? "Edit Profile" : "Create Profile"}</StyledHeading>
        <UserForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          errorMessage={errorMessage}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPassword={setPassword}
          handleForm={onRegisterOrEditUser}
          editAccount={editAccount}
        />
      </FormContainer>
    </>
};

export default Register;
