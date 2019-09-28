import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';


export default function LanguageCircle(props) {

    const [name, setLanguageName] = useState(props.name);
    const [level, setLevel ] = useState(props.level); 
    const [title, setTitle ] = useState(props.title);
    const [value, setValue ] = useState(props.value);
    console.log('val', value);
    
    const Title = styled.div`
            color: #363030;
            font-size: 24px;

    `
    const Level = styled.div`
            color: #363030;
            font-size: 18px;

    `
    const Text = styled.div`
        color: #363030;
        font-size: 14px;
    `

    return (
        <ChangingProgressProvider value={value}>
            {percentage => (
            <CircularProgressbarWithChildren
                value={percentage}
                
                styles={buildStyles({
                    pathColor: '#002859',
                    pathTransition:
                        percentage === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
                })}
            >
                <Title>{name}</Title>
                <Level>{level}</Level>
                <Text>{title}</Text>
            </CircularProgressbarWithChildren>
            )}
        </ChangingProgressProvider>
    )

}