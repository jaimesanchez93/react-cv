import React, { useState } from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import LanguageCircle from './LanguageCircle';
import WorkTimeline from './WorkTimeline';


export default function WorkExperience() {



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

    const WorkTimelineWrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 15px;
    `



    return (
        <SectionWrapper>
            <SectionTitle prefix="fas" icon="suitcase" title="work experience"></SectionTitle>
            <WorkTimelineWrapper>
                <WorkTimeline></WorkTimeline>
            </WorkTimelineWrapper>
        </SectionWrapper>
    )
}