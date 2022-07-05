import styled from "styled-components";
import { Link } from "react-router-dom";

import { devices } from "styled-components/mainStyles";

export const NavContainer = styled.header`

`;

export const NavLink = styled(Link)`
  height: 10px;
  padding: 10px;
  color: black;
  text-decoration: none;
`;

export const Nav = styled.div`
  display: ${props => props.isOpen ? "none" : "flex"};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  top: 115px;
  position: absolute;
  background-color: #D3D3D3;
  width: 200px;
  height: 200px;
`;

export const Logo = styled.img`
  height: 60px;
  width: 140px;
  margin: 10px 10px 0 0;
 
  flex-direction: column;
  cursor: pointer;

  @media ${devices.tablet}{
    height: 120px;
    width: 180px;
  };

  @media ${devices.desktop}{
    width: 200px;
  };
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