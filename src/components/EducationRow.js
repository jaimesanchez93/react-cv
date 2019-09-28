import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';


export default function EducationRow (props) {

    const [title, setTitle] = useState(props.title);
    const [center, setCenter] = useState(props.center);

    const EducationWrapper = styled.div`
        display: flex;
        justiy-content: flex-start;
        margin: 15px 8px;
    `
    const Circle = styled.div`
        border-radius: 100%;
        border: 5px solid #002859;
        height: 15px;
        width: 15px;
    `
    const DataWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        color: black;
        margin-left: 13px;
    `

    const EducationTitle = styled.div`
        color: #363030;
        font-size: 18px;
        font-weight: 500;
    `

    const SubTitle = styled.div`
        color: #363030;
        font-size: 18px;
        font-weight: 300;

    `

    return (
        
        <EducationWrapper>
            <Circle></Circle>
            <DataWrapper>
                <EducationTitle>{title}</EducationTitle>
                <div>{center}</div>
            </DataWrapper>
        </EducationWrapper>
    )
}