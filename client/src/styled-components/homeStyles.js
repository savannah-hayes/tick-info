import styled from "styled-components";
import { devices } from "./mainStyles";

export const HomeContainer = styled.section`
  width: 100%;
`;

export const Hero = styled.div`
  background-color: #175C4C;
  color: #fff;
  padding: 40px;
  margin-top: 20px;
`;

export const HeroParagraph = styled.p`
  font-weight: 600;
  font-size: medium;
   margin: 30px 60px;

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
  margin: 30px 60px;
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
  margin-left: 40px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 20px 0;
`;