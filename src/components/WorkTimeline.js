import React, { useState } from 'react';
import ContactRow from './ContactRow';
import styled from 'styled-components';



import TimelineStep from './TimelineStep';

import {
    useTranslation
} from 'react-i18next';

export default function WorkTimeline () {

    const TimelineWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    `

    const jobStages = [
        {
        timeRange: 'June 2019 - Currently',
        title: 'Fullstack Developer at The keyTalent'
        },
        {
        timeRange: 'September 2017 - May 2019',
        title: 'Web developer at Kas Factory'
        },
        {
        timeRange: 'April 2017 - August 2017',
        title: 'Frontend developer at Bytherent'
        },
        {
        timeRange: 'February 2016 - July 2016',
        title: 'Talentum ShortTracks Telefónica Scolarship: The Musical Pi'
        },
        {
        timeRange: 'June 2015 - February 2016',
        title: 'Web development at Criptored'
        },
    ]

      const {
          t,
          i18n
      } = useTranslation();

        //   i18n.changeLanguage('es-ES');

    return (
        <TimelineWrapper>
            {
                jobStages.map((element, index) => {
                    return (
                            <TimelineStep key={index} index={index} hideLine={index === jobStages.length - 1}
                            timeRange={t(element.timeRange)} title={t(element.title)}>
                            </TimelineStep>
                    )
                })
            }
        </TimelineWrapper>

    )

}