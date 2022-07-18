import React from "react";

import Header from "../reusables/Header";

import {
  HomeContainer,
  Hero,
  HeroParagraph,
  HeroHeading,
  InformationWrapper,
  InformationContainer,
  SubHeading,
  InfoParagraph,
  BulletList,
  ListItem
} from "../styled-components/homeStyles";

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Hero>
          <HeroHeading>TICK INFORMATION</HeroHeading>
          <HeroParagraph>
            Ticks are parasitic arachnids that are part of the mite superorder 
            Parasitiformes. They are related to spiders, so they have eight legs. 
            Have flat, oval bodies that swell when they eat and is 1–4 millimetres 
            long. They are external parasites, living by feeding on the blood of 
            mammals, birds, and sometimes reptiles and amphibians.
          </HeroParagraph>
        </Hero>
     
        <InformationContainer>
          <InformationWrapper>        
            <SubHeading>Ticks can spread diseases</SubHeading>
            <InfoParagraph>
              Ticks are not dangerous, but they can spread diseases. One of these
              diseases is TBE, tick-borne encephalitis, which can cause inflammation,
              swelling, of the brain. Another disease is called Lyme disease, and this
              can affect the skin, joints, and nerves. You can get vaccinated against
              TBE, but not against Lyme disease.
              There is a greater risk of infection if the tick stays attached to the
              skin for a long time. You should therefore remove the tick as quickly as
              possible.
            </InfoParagraph>
            <SubHeading>When should I seek medical care?</SubHeading>
            <InfoParagraph>
              Most people who are bitten by a tick do not need medical care. Contact a
              healthcare centre if a week has passed and any of the following has
              happened:
            </InfoParagraph>
            <BulletList>
              <ListItem>
                There is a red spot in the area where the tick was attached, and this
                spot is larger than a couple of centimetres. The spot can be
                completely red or look like a ring, and it may be lighter in the
                centre.
              </ListItem>
              <ListItem>
                You have a fever, headaches, aches in your body, and you are more
                tired than usual.
              </ListItem>
            </BulletList>
            <SubHeading>Tips for not getting bitten by a tick</SubHeading>
            <BulletList>
              <ListItem>
                Wear a long-sleeved shirt, long trousers, and high shoes or boots
                whenever you are out in nature.
              </ListItem>
              <ListItem>Check your body for ticks after you have been out in nature.</ListItem>
              <ListItem>Check your skin when you get undressed or shower/take a bath.</ListItem>
              <ListItem>Check your children's skin after they have been out in nature.</ListItem>
              <ListItem>Check your dogs, cats or any other animals in the household</ListItem>
            </BulletList>
          </InformationWrapper>
        </InformationContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
