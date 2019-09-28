import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';

import EducationRow from './EducationRow';
import SectionTitle from './SectionTitle';


export default function Education () {

    const educationData = [
        {
            title: 'Software Engineering Degree',
            center: 'Universidad Politécnica de Madrid (2011-2017)'
        },
        {
            title: 'Git, Github & Sourcetree Course',
            center: 'Keepcoding'
        },
        {
            title: 'Python, Django & REST Course',
            center: 'Keepcoding'
        },
        {
            title: 'React, Redux, ES6 Course',
            center: 'Pluralsight'
        },
    ]

    const SectionWrapper = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: flex-start;
        flex: 0 45%;
        margin: 15px 15px 15px 25px;

    `

    const EducationWrapper = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: flex-start;
        margin-top 15px;
    `

    return(
        <SectionWrapper>
            <SectionTitle prefix="fas" icon="graduation-cap" title="education"></SectionTitle>
            <EducationWrapper>
            {
                educationData.map(element => {
                        return (
                            <EducationRow title={element.title} center={element.center}></EducationRow>
                        )  
          

                })
            }
            </EducationWrapper>
        </SectionWrapper>
    )
}

