import React from "react";
import styled from "styled-components";


import Flex from './Flex';
import Responsive from './Responsive';
import Text from './Text';
import { screenSize, fonts, colors } from './Theme';

const ItemWrapper = styled(Flex)`
   /* :nth-last-child() {
      max-width: 40%;
      align-self: center;
   }
   :nth-child(odd) {
      max-width: 40%;
      align-self: flex-start;
   }
   :nth-child(even) {
      max-width: 40%;
      align-self: flex-end;
   } */

   @media(max-width: ${screenSize.md}) {
      margin: 16px 0;
   } 

`;
const Title = styled(Text)``;

const Logo = styled.img`
   max-height: 70px;
   max-width: 260px;
   margin: 16px 0;
`;



const CareerItem = ({name, logo, role, time, description, id}) => {


   return (
      <ItemWrapper direction="column" align="flex-start" id={id}>
         {logo && <Logo src={require(`../assets/${logo}`)}></Logo>}
         <Title size="24px" weight="700" lineHeight="29px">{name}</Title>
         <Text margin="4px 0" size="20px" weight="700" lineHeight="24px" color={colors.opal} transform="uppercase">{role}</Text>
         <Text margin="4px 0" size="18px" weight="700" lineHeight="22px" color={colors.caribeanGreen} >{time}</Text>
         {description && <Text margin="7px 0" size="16px" lineHeight="24px" family={fonts.Nunito}>{description}</Text> }
      </ItemWrapper>
   )  
}

export default CareerItem;