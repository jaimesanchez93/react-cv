import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';


export default function TimelineStep (props) {

    const [timeRange, setTimeRange] = useState(props.timeRange);
    const [title, setTitle] = useState(props.title);

    const Circle = styled.div`
        border-radius: 100%;
        border: 5px solid #002859;
        height: 10px;
        width: 10px;
    `

    const StepWrapper = styled.div`
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        ::after{
            			  content: '';
			  position: absolute;
			  left: 50%;
			  top: 30px; /* bottom: 0;  bottom: 50%;=center top: 30px;=top  */ 
			  transform: translateX(-55%);/* transform: translateX(-50%); */
			  -webkit-transform: translateX(-55%);
			  width: 30px;
			  height: 30px;
			  border-radius: 50%;
			  background: inherit;
			  border: 2px solid #03A9F4;
        }
    `

    const TimeRange = styled.div`
        font-size: 24px;
        font-weight: 500;
        color: #363030;
    `
    const JobTitle = styled.div`
        font-size: 18px;
        font-weight: 300;
        color: #363030;
    `

    return (
        <StepWrapper>
            <Circle/>
            <TimeRange>{timeRange}</TimeRange>
            <JobTitle>{title}</JobTitle>
        </StepWrapper>
    )

}