import React from 'react';
import styled from 'styled-components';
import { CircleProgressBar } from './CircleProgressBar';

import Flex from './Flex';
import Responsive from './Responsive';
import Text from './Text';

import { colors } from './Theme';

const Container = styled(Responsive)`
   width: 100%;
`;

const InfoBox = styled(Flex)``;

const LanguageItem = props => (
  <Container justify="flex-start">
    <CircleProgressBar style={{ width: '100%' }} className="circle" trailStrokeColor={colors.concrete} strokeColor={colors.caribeanGreen} percentage={props.percentage} innerText="" />
    <InfoBox direction="column" align="flex-start">
      <Text size="20px" margin="4px 0" weight="700" lineHeight="24px" transform="uppercase">{props.language}</Text>
      <Text size="18px" margin="4px 0" color={colors.opal} lineHeight="24px">{props.level}</Text>
      <Text size="18px" margin="4px 0" color={colors.opal} lineHeight="24px">{props.title}</Text>
    </InfoBox>
  </Container>
);

export default LanguageItem;
