import styled from "styled-components";
import { devices } from "./mainStyles";

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
  text-align: center;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 5vh 15vw;
`;


export const InformationContainer = styled.div`
  width: 100%;
`;

export const SubHeading = styled.h2`
  color: #175C4C;
`;

export const InfoParagraph = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  line-break: loose;
`;

export const BulletList = styled.ul`
  list-style-type: circle;
`;

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  margin-left: 4vw;
  margin-right: 7vw;
`;