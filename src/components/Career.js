import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import Flex from './Flex';
import Responsive from './Responsive';
import Text from './Text';
import { screenSize, colors } from './Theme';
import { useResponsive } from '../lib/ResponsiveProvider';


import CareerItem from './CareerItem';

const Container = styled(Flex)``;

const CareerWrapper = styled(Responsive)`
`;
const SectionWrapper = styled(Responsive)`
`;

const Title = styled(Text)`
   @media(max-width: ${screenSize.md}) {
         align-self: center;
   } 
`;

const Column = styled(Flex)`
   position: relative;
`;

const InfoBox = styled(Flex)`
   position: relative;

   @media(max-width: ${screenSize.md}) {
         padding: 0 16px;
   } 
`;

const Timeline = styled(Flex)`
   position: absolute;
   height: 100%;
   width: 3px;
   background-color: ${colors.caribeanGreen};
   top: 0;
`;

const BulletList =  styled(Flex)`
   position: absolute;
   top: 0;
   height: 100%;
`;

const Bullet = styled.div`
   position: absolute;
   width: 20px;
   height: 20px;
   border: 3px solid ${colors.caribeanGreen} !important;
   background-color: white;
   border-radius: 50%;
   top: 0;
   left: -13.5px;

   :first-child {
      margin-top: 0 !important;
      background-color: ${colors.caribeanGreen};

   }

   :last-child {
      position: absolute;
      top: 100%;
      background-color: ${colors.caribeanGreen};
   }
`;

const Career = () => {
   const { responsive } = useResponsive();
   const [topPositions, setTopPositions] = useState([]);

   const careerList = [
      {
         id: 1,
         name: 'University',
         logo: null,
         role: 'Universidad Politécnica de Madrid Software Engineer',
         time: '2011 - 2017',
         description: null
      },
      {
         id: 2,
         name: 'Criptored',
         logo: 'criptored.png',
         role: 'Web developer',
         time: 'Jun 2015 - Feb 2016',
         description: 'I worked at Criptored, a project from UPM university, for 7 months as a web developer/UX developer (HTML + CSS)'
      },
      {
         id: 3,
         name: 'The Musical Pi',
         logo: 'the_musical_pi.png',
         role: 'Personal project',
         time: 'Feb 2016 - Jul 2016',
         description: 'At Talentum Shorttracks i had the chance to develop a personal project. It was a generic music Synthesizer using a Raspberry Pi and a keyboard. It was based on Raspbian OS wich a GUI to select different synths installed in the raspberry and integrated with the CSound API to plug the keyboard and register sounds.'
      },
      {
         id: 4,
         name: 'Bytherent',
         logo: 'bytherent.png',
         role: 'Frontend Developer',
         time: 'Apr 2017 - Aug 2017',
         description: 'I was working for 4 months at Bytherent, a Real State startup. The tech stack that we used was NodeJS and Parse for the backend and AngularJS for the web app, the was also a native app in iOS and Android. I worked as the main frontend developer but I also helped when I could with the Android app since I had a 200h Android Course sponsored by Samsung.'
      },
      {
         id: 5,
         name: 'Kas Factory',
         logo: 'kas_factory.png',
         role: 'Web developer',
         time: 'Sep 2019 - May 2019',
         description: 'Worked at Kas Factory for almost two years. I was working as the main frontend developer using Angular and Ionic but I did  several tasks for the backend using Django. Among  other third party libraries I got to work with Stripe, Paypal, Google Maps. ...As part of my formation I recieved a Python and Django curse from the CEO who is the Director of the Web Development Bootcamp at Keepcoding.'
      },
      {
         id: 6,
         name: 'The Key Talent',
         logo: 'the_key_talent.png',
         role: 'Full stack developer',
         time: 'Jun 2019 - Now',
         description: 'I am involucrated in different projects formed by multiple teams (engineer, product and UX). We are using the Django/Angular stack, and Jenkins for the CI/CD process'
      },
      {
         id: 7,
         name: 'Nware',
         logo: 'nware.png',
         role: 'Main frontend developer',
         time: 'Jun 2020 - Now',
         description: 'I am the main frontend developer, where I am developing several projects with Angular and React Native. Also I am working side by side with the backend and streaming teams, to integrate all the features with the frontend apps, besides working with the product team to manage the roadmap.'
         // description: 'I am the main frontend developer at Nware, where I am developing several projects such as a Web app (Angular) and Android App (React Native) to play games from the cloud. Also I am working side by side with the backend team and the streaming team to integrate all the features with the frontend apps, besides working with the product team to manage the roadmap.'
      },
   ].reverse();

   const leftColumn = careerList.filter((element, index) => index % 2 === 0);
   const rightColumn = careerList.filter((element, index) => index % 2 !== 0);
   console.log('right column', rightColumn);
   console.log('left column', leftColumn);
   const [universityCareerHeight, setUniversityCareerHeight ] = useState(0);

   const timelineRef = useRef();

   useEffect(() =>{
      let tops = [];
      if (!responsive) {
         const universityHeight = document.getElementById(`career-${careerList[careerList.length - 1].id}`).clientHeight;
         setUniversityCareerHeight(universityHeight);
   
         careerList.map((element, index) => {
            let offsetTop = document.getElementById(`career-${element.id}`).offsetTop;
            console.log('offset top for', element, offsetTop);
            if (element.id % 2 === 0) {
               offsetTop += 50;
            } else if(index > 0) {
               offsetTop += 100;
            }
            if (index === careerList.length - 1) {
               offsetTop = timelineRef.current.clientHeight;
            }
            tops.push(offsetTop);
         });      
         setTopPositions(tops);
      }
   }, []);


   return (
      <Container>
         <SectionWrapper direction="column" align="flex-start">
         <Title size="38px" weight="700" textAlign="left" margin="16px 0">Career</Title>
         <InfoBox>
               {!responsive && <Timeline ref={timelineRef} className="timeline" /> }
               {!responsive && 
               <BulletList direction="column" justify="flex-start">
                  <div style={{position: 'relative'}}>
                     {
                        careerList.map((element, index) => {

                           return (
                              <Bullet key={index} style={{ top: `${topPositions[index]}px` }}></Bullet>
                           )
                        })
                     }
                  </div>
               </BulletList>
               }
            <CareerWrapper direction="column">
               {responsive  ? careerList.map((element, index) => {
                     return (
                        <CareerItem key={element.name} name={element.name}
                           logo={element.logo} role={element.role}
                           time={element.time} description={element.description} />
                     )
               }) :  
               <Flex justify="space-between" align="flex-start">
                  <Column style={{ flexGrow: '1' }}  className="career-column" direction="column" align="flex-start" margin="0 75px">
                     {leftColumn.map((element, index) => {
                        return(
                           <CareerItem id={`career-${element.id}`} style={{ maxWidth: '40%' }}  key={element.name} name={element.name}
                              logo={element.logo} role={element.role}
                              time={element.time} description={element.description} />
                        )
                     })}
                  </Column>

                  <Column style={{ flexGrow: '1', paddingTop: '100px' }}  direction="column" align="flex-end" margin="0 75px">
                           {rightColumn.map((element, index) => {
                              return (
                                 <CareerItem id={`career-${element.id}`} key={element.name} name={element.name}
                                    logo={element.logo} role={element.role}
                                    time={element.time} description={element.description} />
                              )
                           })}
                  </Column>
               </Flex>
               }

            </CareerWrapper>
         </InfoBox>
         </SectionWrapper>
      </Container>
   );
};

export default Career;