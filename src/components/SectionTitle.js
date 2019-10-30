import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


export default function SectionTitle (props) {

    const [prefix, setPrefix] = useState(props.prefix);
    const [iconName, setIconName] = useState(props.icon);
    const [title, setTitle] = useState(props.title);
    const { t, i18n } = useTranslation();

    const TitleWrapper = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
    `

    const Title = styled.div`
        color: #002859;
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 500;
        margin-left: 10px;
    `

    return(
        <TitleWrapper>
            <FontAwesomeIcon size="2x" color="#1391b1" icon={[prefix, iconName]} />
            <Title>{t(title)}</Title>
        </TitleWrapper>

    )
}