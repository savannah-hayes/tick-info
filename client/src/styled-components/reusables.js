import styled from "styled-components";
import { devices } from "styled-components/globalStyles";

export const Header = styled.header`
  height: 90px;
  
  @media ${devices.tablet}{
    height: 120px;
  };
`;

export const Logo = styled.img`
  height: 60px;
  width: 140px;
  margin: 10px 10px 0 0;

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
  justify-content: center;
`;

export const Select = styled.select`
  margin: 5px;
  font-family: 'Source Serif Pro';

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    }
  }
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
