import styled from "styled-components";
import { devices } from "./mainStyles";

const userWrappers = styled.div`
  width: 320px;
  @media ${devices.mobile} { width: 375px; };
  @media ${devices.mobileL} { width: 400px; };
  @media ${devices.tabletS} { width: 450px; };
  @media ${devices.tablet} { width: 500px; };
  @media ${devices.desktop} { width: 600px; };
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CountDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E2F5FA;

  padding: ${props => props.addTop ? "10px" : "20px 10px" };
`;

export const Heading = styled.h1`
  color: #175C4C;
`;

export const SubHeading = styled.h2`
  text-align: center;
`;

export const CountdownContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const CountdownWrapper = styled.div`
  display: flex;
  flex-direction : column;
  align-items: center;
  margin-right: 20px;
  background: darkorange;
  opacity: 0.9;
  border-radius: 10px;
  padding: 10px;
  width: 45px;

  :last-of-type {
    margin-right: 0;
  }
`;

export const Time = styled.p`
  font-size: 32px;
  color: white;
  margin: 0;
`;

export const Interval = styled.p`
  margin-bottom: 0;
  color: white;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const CardHeader = styled.h2`
  font-size: 19px;
  margin: 40px 0 60px 0;
`;

export const UserDetailsContainer = styled(userWrappers)`
  display: flex;
  margin-bottom: 15px;
`;

export const UserDetailsWrapper = styled(userWrappers)`
  margin-bottom: 5px;
`;

export const UserName = styled.p`
  margin: 0 0 -5px 7px;
  font-weight: 600;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const NameLabel = styled.p`
  margin: -5px 0 30px 7px;
  font-size: 14px;
`;

export const TableContainer = styled.div`
  display: flex;
`;

export const TableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 680px;
  border-top: 2px solid black;
`;

export const TableItem = styled.p`
  text-align: ${props => props.label ? "center" : "left" };
  font-weight: ${props => props.label ? "700" : "500" };
  font-size: ${props => props.label ? "18px" : "16px" };
  padding: 20px;
  margin: 0;
  width: 150px;
  height: 30px;
  border-right: 2px solid black;

  &:last-child {
    border-right: none;
  }
`;

export const IconWrapper = styled.span`
  @media ${devices.desktop}{
    &:before {
      content: attr(data-hover);
      visibility: hidden;
      opacity: 0;
      width: 130px;
      background-color: #737272;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 5px 0;
      transition: opacity 1s ease-in-out;
      position: absolute;
    }
  }
  
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }
`;

export const TrashIcon = styled.img`
  width: 20px; 
  position: absolute;
  margin: 28px 0px 0 10px;
`;
