import styled from "styled-components";
import { devices } from "./globalStyles";

export const HomeContainer = styled.section`
  width: 100vw;
`;

export const Hero = styled.div`
  background-color: #175C4C;
  padding: 40px 150px;
`;

export const HeroParagraph = styled.p`
  font-weight: 600;
  font-size: medium;

  @media ${devices.tablet} {
    font-weight: 600;
    font-size: larger;
    line-height: 33px;
  };
`;

export const HeroHeading = styled.h1`
  font-weight: 600;
  font-size: medium;
  text-align: center;

  @media ${devices.tablet} {
    font-weight: 600;
    font-size: 30px;
  };

  @media ${devices.desktop}{
    margin-bottom: 50px;
  };
`;

export const ImageListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const ImageList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 380px;
  height: 250px;
  align-items: center;

  @media ${devices.tablet} {
    width: 750px;
    height: 400px;
  };

  @media ${devices.desktop}{
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin-left: 10vw;
    margin-right: 10vw;
  };
`;

export const ListItem = styled.li`
 @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    }
  };
`;

export const StyledListImg = styled.img`
  height: 100px;
  width: 100px;

  @media ${devices.tablet} {
    height: 170px;
    width: 170px;
  };

  @media ${devices.desktop}{
    height: 140px;
    width: 140px;

    &:hover {
      height: 150px;
      width: 150px;
    }
  };
`;

export const LogInButton = styled.button`
  background-color: #175c4c;
  color: #ffffff;
  height: 45px;
  width: 160px;
  border: none;
  border-radius: 30px;
  -webkit-box-shadow: 3px 7px 9px -2px rgba(0, 0, 0, 0.84);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
  font-size: medium;
  margin-bottom: 40px;

  @media ${devices.tablet} {
    margin-top: 140px;
    margin-bottom: 80px;
    height: 65px;
    width: 200px;
    font-size: 25px;

    &:hover {
      cursor: pointer;
      background-color: #094739;
      color: #ffffff;
    };

    @media ${devices.desktop} {
      margin-top: 10px;
    }
  };
`;

export const LogInButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-left: 15vw;
  margin-right: 15vw;
  margin-top: 5vh;
`;