import React, { useState } from 'react';
import styled from 'styled-components';

import LanguageCircle from './LanguageCircle';


export default function SkillColumn (props) {

    const [title, setTitle] = useState(props.title);
    const [skills, setSkills] = useState(props.skills);
    const [value, setValue] = useState(props.value)

    const ColumnWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        flex: 0 30%;
    `

    const Title = styled.div`
        font-size: 21px;
        color: #002859;
        text-decoration: underline;
        margin-top: 15px;
    `

    const Text = styled.div`
        display: flex;
        font-size: 14px;
        color: #363030;
        margin: 8px 0;
    `

    const TitleWrapper = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    `

    const CircleWrapper = styled.div`
        width: 25px;
        margin-left: 5px;
    `

    return(
        <ColumnWrapper>
            <TitleWrapper>
                <Title>{title}</Title>
                <CircleWrapper>
                    <LanguageCircle value={value}></LanguageCircle>
                </CircleWrapper>
            </TitleWrapper>
            {
                skills.map((element, index) =>{
                    return(
                        <Text key={index}>{element}</Text>
                    )
                })
            }
        </ColumnWrapper>
    )
}