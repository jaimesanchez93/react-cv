import React from "react";
import styled from "styled-components";

import Flex from './Flex';
import Responsive from './Responsive';
import Text from './Text';

const Container = styled(Flex)``;

const Title = styled(Text)``;

const LanguageItem = styled(Flex)``;

const TechItem = styled(Flex)``;


const Skills = () => {
   return(
      <Container>
         <Responsive direction="column" align="flex-start">
            <Title size="38px" weight="700" textAlign="left">Skills & Technologies</Title>
         </Responsive>
      </Container>
   );
}

export default Skills;