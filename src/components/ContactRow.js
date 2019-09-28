import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';



export default function ContactRow (props) {

    const ContactRowWrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex: 0 45%;
        margin: 10px 15px 10px 25px;
    `

    const ContactData = styled.div`
        margin-left: 10px;
        font-weight: 300;
        font-size: 18px;
    `
    
    const [iconName, setIcon] = useState(props.icon);
    const [prefix, setPrefix] = useState(props.prefix);
    const [data, setData] = useState(props.data);
    return (
        <ContactRowWrapper>
            <FontAwesomeIcon size="2x" color="white" icon={[prefix, iconName]} />
            <ContactData>{data}</ContactData>
        </ContactRowWrapper>
    )
}
