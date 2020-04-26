
import React, { useState } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flex from './Flex';
import Responsive from './Responsive';



const HeaderWrapper = styled(Flex)``;

const TitleRow = styled(Responsive)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 200px;
`

const HeaderTitle = styled.div`
    font-family: "Montserrat";
    font-size: 30px;
    font-weight: regular;
`

const NameSpan = styled.span`
    font-weight: bold;
`

const JobTitle = styled.span`
    color: #0CCEAF;
`

const ContactRow = styled(Responsive)`
 & * {
     margin: 0 15px;
 }
 `;

 const IconLink = styled.a`
    background-color: rgba(0,0,0,0);
    border-radius: 0;
    border: 0px;
    font-size: 20px;
    cursor: pointer;
`;

export default function Header () {

    return (
        <HeaderWrapper className="header-wrapper" direction="column" align="center" justify="center">
            <TitleRow>
            <HeaderTitle>
                    Hello, I'm <NameSpan>Jaime Sánchez Pedrós</NameSpan>,<br></br> <JobTitle>software engineer</JobTitle> with experience in <br></br> web development.
            </HeaderTitle>
            </TitleRow>
            <ContactRow justify="flex-end" align="center">
                <IconLink href="https://www.github.com/jaimesanchez93/" target="_blank">
                    <FontAwesomeIcon color="#0CCEAF" size="2x" icon={['fab', 'github']}></FontAwesomeIcon>
                </IconLink>
                <IconLink href="tel:667682756">
                    <FontAwesomeIcon color="#0CCEAF" size="2x" icon={['fas', 'phone-alt']}></FontAwesomeIcon>
                </IconLink>
                <IconLink href="mailto:jaimesanchez.93@gmail.com">
                    <FontAwesomeIcon color="#0CCEAF" size="2x" icon={['fas', 'envelope']}></FontAwesomeIcon>
                </IconLink>
                <IconLink href="https://www.linkedin.com/in/jaime-sanchez-pedros" target="_blank">
                    <FontAwesomeIcon color="#0CCEAF" size="2x" icon={['fab', 'linkedin']}></FontAwesomeIcon>
                </IconLink>
            </ContactRow>
        </HeaderWrapper>
    )

}