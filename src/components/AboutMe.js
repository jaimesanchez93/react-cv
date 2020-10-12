import React from "react";
import styled from "styled-components";

import Responsive from './Responsive';
import Flex from './Flex';
import Text from './Text';
import { screenSize } from './Theme';

import { ReactComponent as Headphones} from '../assets/headphones.svg';
import { ReactComponent as Popcorn } from '../assets/popcorn.svg';
import { ReactComponent as Gamepad } from '../assets/gamepad.svg';
import { ReactComponent as Football } from '../assets/american-football.svg';


const Container = styled(Flex)`
   margin-top: 125px;
   @media (max-width: ${screenSize.md}) {
     margin-top: 24px;
   }
`;


const Wrapper = styled(Responsive)`
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
`;

const HobbiesSection = styled(Responsive)`
   margin: 0;
   width: auto;
   @media (max-width: 768px) {
      margin: 16px 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
`;

const PicturesBlock = styled(Flex)`
   width: 100%;
   & * {
      margin: 20px 0;
   }
`;

const PicturesRow = styled(Flex)``;

const AboutMeSection = styled(Responsive)`

   @media (min-width: ${screenSize.xl}) {
      max-width: 70%;
   }
   @media (max-width: 768px) {
      margin: 16px 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .description {
         text-align: center;
         margin: 0 16px;
      }
}
`;

const Title = styled(Text)``;

const AboutMe =  () => {
   return(
      <Container>
      <Wrapper justify="space-between" align="flex-start">
         <HobbiesSection direction="column" align="flex-start" margin="0 25px">
            <Title style={{width: '100%' }}  size="38px" weight="700" margin="10px 0 20px 0">Hobbies</Title>
            <PicturesBlock direction="column" align="space-between" justify="space-between">
                  <PicturesRow justify="space-between">
                     <Headphones  />
                     <Popcorn  />
                  </PicturesRow>
                  <PicturesRow justify="space-between">
                     <Gamepad />
                     <Football />
                  </PicturesRow>
            </PicturesBlock>
         </HobbiesSection>

         <AboutMeSection direction="column" align="flex-end">
               <Title size="38px" weight="700" margin="10px 0 20px 0">About Me</Title>
            <Text className="description" size="22px" color="#AAC0C8" textAlign="right" lineHeight="30px" margin="20px 0">
                  I am a software engineer who loves his job and has a passion for technology and software, especially web and mobile development. Since I was a little kid, I have been learning and playing with technology and software. I am an innovating and constant person.  Moreover, I am a sport and music fan, especially American sports and electronic music. I am an outgoing person who likes to converse with people about a lot of things! 
            </Text>
         </AboutMeSection>
      </Wrapper>
      </Container>
   );
};

export default AboutMe;