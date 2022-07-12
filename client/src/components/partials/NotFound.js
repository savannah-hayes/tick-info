import React from "react";

import { NotFoundHeader } from "styled-components/mainStyles";
import Header from "../../reusables/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <NotFoundHeader>404 Page not found</NotFoundHeader>
    </>
  )
};

export default NotFound;