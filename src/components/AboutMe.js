import React from "react";
import styled from "styled-components";

import Responsive from './Responsive';
import Flex from './Flex';
import Text from './Text';

import { ReactComponent as Headphones} from '../assets/headphones.svg';
import { ReactComponent as Popcorn } from '../assets/popcorn.svg';
import { ReactComponent as Gamepad } from '../assets/gamepad.svg';
import { ReactComponent as Football } from '../assets/american-football.svg';


const Container = styled(Flex)``;
const Wrapper = styled(Responsive)``;

const HobbiesSection = styled(Flex)``;

const PicturesBlock = styled(Flex)`
   & * {
      flex: 0 0 50%;
      margin: 20px 0;
   }
`;

const AboutMeSection = styled(Flex)`

   max-width: 60%;
`;

const Title = styled(Text)``;

const AboutMe =  () => {
   return(
      <Container margin="125px 0 0 0">
      <Wrapper justify="space-between" align="flex-start">
         <HobbiesSection direction="column" margin="0 25px">
            <Title style={{width: '100%' }} textAlign="center" size="38px" weight="700" margin="10px 0 20px 0">Hobbies</Title>
            <PicturesBlock wrap="wrap" justify="flex-start">
                  <Headphones style={{height: '55px', width: '55px'}} />
                  <Popcorn style={{height: '55px', width: '55px'}} />
                  <Gamepad style={{height: '55px', width: '55px'}} />
                  <Football style={{height: '55px', width: '55px'}} />
            </PicturesBlock>
         </HobbiesSection>

         <AboutMeSection direction="column" align="flex-end">
               <Title size="38px" weight="700" margin="10px 0 20px 0">About Me</Title>
            <Text size="22px" color="#AAC0C8" textAlign="right" lineHeight="30px" margin="20px 0">
                  I am a software engineer who loves his job and has a passion for technology and software, especially web and mobile development. Since I was a little kid, I have been learning and playing with technology and software. I am an innovating and constant person.  Moreover, I am a sport and music fan, especially American sports and electronic music. I am an outgoing person who likes to converse with people about a lot of things! 
            </Text>
         </AboutMeSection>
      </Wrapper>
      </Container>
   );
};

export default AboutMe;