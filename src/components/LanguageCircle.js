import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';


export default function LanguageCircle(props) {

    const [name, setLanguageName] = useState(props.name);
    const [level, setLevel ] = useState(props.level); 
    const [title, setTitle ] = useState(props.title);
    const [value, setValue ] = useState(0);
    
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

    useEffect(() => {        
       for(let i=0;i<=props.value;i++){           
           setTimeout(() => {
               setValue(i);
           }, 500);
       }
    }, [props.value]);

    

    return (
            <CircularProgressbarWithChildren
                value={value}
                
                styles={buildStyles({
                    pathColor: '#002859',
                    pathTransitionDuration: 2.5,
                })}
            >
                <Title>{name}</Title>
                <Level>{level}</Level>
                <Text>{title}</Text>
            </CircularProgressbarWithChildren>
    )

}