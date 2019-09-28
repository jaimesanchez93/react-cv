import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import LanguageCircle from './LanguageCircle';


export default function Languages () {

    const SectionWrapper = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: flex-start;
        margin-top 15px;
        margin-left: 15px;
        flex: 0 45%;
        margin: 15px 15px 15px 25px;
    `

    const LanguagesWrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 15px;
    `

    const CircleWrapper = styled.div`
        width: 250px;
        margin-top: 15px;
        margin-right: 120px;
    `

    return (
        <SectionWrapper>
            <SectionTitle prefix="fas" icon="globe-europe" title="languages"></SectionTitle>
            <LanguagesWrapper>
                    <CircleWrapper>
                        <LanguageCircle value="75" name='English' level='B2 Level' title='TOEIC Listening & Reading' ></LanguageCircle>
                    </CircleWrapper>
                    <CircleWrapper>
                        <LanguageCircle value="100" name='Spanish' level='Native' ></LanguageCircle>
                    </CircleWrapper>
            </LanguagesWrapper>
        </SectionWrapper>
    )
}