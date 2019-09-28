import React, {useState} from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';


export default function CVHeader () {

    const [fullName, setFullName] = useState('Jaime Sánchez Pedrós');
    const [title, setTitle] = useState('Software Engineer');

    const contactData = [
        {prefix: 'fas', icon: 'phone-square-alt', data: '667 682 756'},
        {prefix: 'fab', icon: 'linkedin', data: 'linkedin.com/in/jaime-sanchez-pedros'},
        {prefix: 'fas', icon: 'envelope', data: 'jaimesanchez.93@gmail.com'},
        {prefix: 'fas', icon: 'car', data: 'Drive license'},
        {prefix: 'fab', icon: 'github', data: 'github.com/jaimesanchez93'},
    ]


     const HeaderWrapper = styled.div`
        width: 100%
        background-color: #002859
     `

     const BasicInfoBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; 
     `

     const Title = styled.div`
        color: white;
        font-weight: 500;
        font-size: 32px;
        margin-left: 10px;
        margin-top: 15px;

     `

     const SubTitle = styled.div`
        color: white;
        font-style: italic;
        font-size: 24px;
        font-weight: 300;
        margin-left: 25px;
        margin-top: 5px;

     `

     const ContactInfoBox = styled.div`
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
     `

    return (
        <HeaderWrapper>
            <BasicInfoBox>
                <Title>{fullName}</Title>
                <SubTitle>{title}</SubTitle>
            </BasicInfoBox>
            <ContactInfoBox>
                {
                    contactData.map(element => {
                        return (
                            <ContactRow prefix={element.prefix} icon={element.icon} data={element.data}></ContactRow>
                        )
                    })
                }
            </ContactInfoBox>
        </HeaderWrapper>
    )
}