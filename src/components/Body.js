import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';

import Education from './Education';
import Languages from './Languages';
import WorkExperience from './WorkExperience';

export default function CVBody() {

    const BodyWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    `

    const BodyRow = styled.div`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    `

    return (
        <BodyWrapper>
            <BodyRow>
                <Education></Education>
                <Languages></Languages>
            </BodyRow>
            <BodyRow>
                <WorkExperience></WorkExperience>
            </BodyRow>
        </BodyWrapper>
    )
}