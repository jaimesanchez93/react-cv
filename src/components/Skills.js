import React, { useState } from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import SkillColumn from './SkillColumn';

export default function Skills() {

    const SkillsWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 0 45%;
        margin: 15px 15px 15px 25px;
    `

    const SkillRow = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
    `

    const skillsObj = [
        {
            title: 'Frontend',
            skills: ['Angular', 'AngularJS', 'React'],
            value: 90
        },
        {
            title: 'Backend',
            skills: ['Django', 'Node', 'Laravel'],
            value: 70
        },
        {
            title: 'Misc',
            skills: ['Gulp', 'Webpack', 'Docker'],
            value: 60
        },
    ]


    return (
        <SkillsWrapper>
            <SectionTitle prefix="fas" icon="book" title="skills"></SectionTitle>
            <SkillRow>
                {
                    skillsObj.map((element, index) => {
                        return (
                            <SkillColumn key={index} title={element.title}
                                         skills={element.skills} value={element.value}>

                            </SkillColumn>
                        )
                    }
                    )
                }
            </SkillRow>
        </SkillsWrapper>
    )
}