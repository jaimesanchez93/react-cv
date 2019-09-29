import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled, {keyframes} from 'styled-components';



export default function TimelineStep (props) {

    const [timeRange, setTimeRange] = useState(props.timeRange);
    const [title, setTitle] = useState(props.title);
    const [hideLine, setHideLine] = useState(props.hideLine);

    const [index, setIndex] = useState(props.index);
    
    const Circle = styled.div`
        border-radius: 100%;
        border: 5px solid #002859;
        height: 10px;
        width: 10px;
    `

    const StepWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: flex-start;
    `

    const TextWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-left: 20px;
    `

    const TimeRange = styled.div`
        font-size: 24px;
        font-weight: 500;
        color: #363030;
        line-height: 1;
    `
    const JobTitle = styled.div`
        font-size: 18px;
        font-weight: 300;
        color: #363030;
        margin-top: 5px;
    `


    const CircleBox = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const keyFrameExampleOne = keyframes`
        0% {
            height: 0px;
        }
        100% {
            height: 80px;
        }
    `

    const CenterLine = styled.div`
        // position: absolute;
        width: 3px;
        height: 80px;
        top: 0;
        left: 50 %;
        margin - left: -2px;
        background: #002859;
        z-index: -1;
        animation: ${keyFrameExampleOne} 1.5s ease-in-out 0s 1;

    `

    return (
        <StepWrapper>
            <CircleBox>
                <Circle />
                {!hideLine ? <CenterLine></CenterLine>: null }
            </CircleBox>
            <TextWrapper>
                <TimeRange>{timeRange}</TimeRange>
                <JobTitle>{title}</JobTitle>
            </TextWrapper>
        </StepWrapper>
    )

}

