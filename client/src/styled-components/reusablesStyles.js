import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { devices } from "styled-components/mainStyles";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  height: 10px;
  color: black;
  margin-bottom: 10px;
  text-decoration: none;

  @media ${devices.tablet} {
    font-size: 18px;
  }

  @media ${devices.desktop} {
    font-size: 20px;
    margin-bottom: 20px;
  }

   &.active {
    font-weight: 600;
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border-left: ${props => props.isOpen ? "none" : "1px solid #ededed"};
  cursor: pointer;
  width: 200px;
  padding: 0 15px;
  background-color: ${props => props.isOpen ? "white" : "#fafafa"};

  span {
    height: 4px;
    width: 35px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
    transform-origin: 6px;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${props => props.isOpen ? "rotate(0)" :  "rotate(45deg)"};
    }

    &:nth-child(2) {
      transform: ${props => props.isOpen ? "translateX(0)" : "translateX(100%)"};
      opacity: ${props => props.isOpen ? 1 : 0 };
    }

    &:nth-child(3) {
      transform: ${props => props.isOpen ? "rotate(0)" : "rotate(-45deg)"};
    }
  }
  
  @media ${devices.desktop} {
    margin-bottom: 15px;
  }
`;

export const NavWrapper= styled.div`
  display: ${props => props.isOpen ? "none" : "flex"};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  background-color: #fafafa;
  border-left: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  position: absolute;
  right: 0;
  width: 200px;
  padding: 0 15px 10px 15px;
  height: 200px;
  transition: all 0.3s ease-in-out;


  @media ${devices.desktop} {
    margin-top: -15px;
    height: 270px;
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: 140px;
  margin: 10px 10px 0 0;
  cursor: ${props => props.removePointer ? "default" : "pointer"};
`;

export const Inputs = styled.input`
  margin: 5px;
  font-family: 'Source Serif Pro';

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.column ? "column" : "row"};
  justify-content: center;
`;

export const Select = styled.select`
  margin: 5px;
  font-family: 'Source Serif Pro';

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    };
  };
`;

export const DateInput = styled(Inputs)`
`;

export const BatchInput = styled(Inputs)`
`;

export const Button = styled.button`
  font-family: 'Source Serif Pro';
  margin: 5px;
  background-color: lightblue;
  color: #175C4C;
  border: 1px solid #175C4C;
  padding: 5px;
  border-radius: 2px;
  font-weight: 700;

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
      background-color: #8ec2d1;
    }
  }
`;

export const StyledInputField = styled.input`
  height: 45px;
  width: 320px;
  border-radius: 10px;
  border: solid #aaaaaa 1px;
   padding: 2px 5px 2px 7px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledParagraph = styled.p`
  margin: 10px 40px 50px 30px;
`;

export const InputWrapper = styled.label`
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  background-color: #175C4C;
  color: #FFFFFF;
  height:45px;
  width: 320px;
  border: none;
  border-radius: 30px;
  -webkit-box-shadow: 3px 7px 9px -2px rgba(0,0,0,0.84); 
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  font-family: 'Source Serif Pro', serif;
  font-weight: 600;
  font-size: 16px;

  @media ${devices.tablet}{
    font-size: 20px;
  }

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
      background-color: #094739;
      color: #ffffff;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;