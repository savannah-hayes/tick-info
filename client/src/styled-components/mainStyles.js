import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  
  to {
    transform: rotate(360deg); 
  }
`;

export const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #175C4C;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
  margin: 50px auto 0 auto;
`;

export const devices = {
  mobile: "(min-width: 375px)",
  mobileL: "(min-width: 460px)", 
  tabletS: "(min-width: 600px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const colorScheme = {
  primary: "color: #175C4C",
  secondary: "color: #F98700",
  accent: "color: #e1eedd",
  primaryBackground: "background-color: #175C4C",
  secondaryBackground: "background-color: #F98700",
  accentBackground: "background-color: #e1eedd"
};

export const NotFoundHeader = styled.h1`
  text-align: center;
`;