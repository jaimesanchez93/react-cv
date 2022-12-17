import React from "react";
import styled from "styled-components";

import Flex from "./Flex";
import Responsive from "./Responsive";
import Text from "./Text";
import { screenSize, fonts } from "./Theme";

import TechItem from "./TechItem";
import LanguageItem from "./LanguageItem";

const Container = styled(Flex)`
  @media (max-width: ${screenSize.md}) {
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
  }
`;

const SkillsWrapper = styled(Flex)`
  @media (max-width: ${screenSize.md}) {
    align-items: center;
  }
`;

const Title = styled(Text)`
  @media (max-width: ${screenSize.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 28px;
  }
`;

const Content = styled(Responsive)`
  width: 100%;
  @media (max-width: ${screenSize.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillItem = styled(Responsive)`
  width: 100%;
  @media (max-width: ${screenSize.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled(Responsive)`
  @media (max-width: ${screenSize.md}) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const Skills = () => {
  const frontendList = [
    {
      name: "Javascript",
      logo: "Javascript.png",
    },
    {
      name: "Angular",
      logo: "Angular.png",
    },
    {
      name: "React",
      logo: "React.png",
    },
    {
      name: "AngularJS",
      logo: "AngularJS.png",
    },
    {
      name: "Ionic",
      logo: "Ionic.png",
    },
    {
      name: "React Native",
      logo: "react-native.png",
    },
  ];

  const backendList = [
    {
      name: "Django",
      logo: "Django.png",
    },
    {
      name: "NodeJS",
      logo: "Node.png",
    },
    {
      name: "Laravel",
      logo: "Laravel.png",
    },
    {
      name: "Parse",
      logo: "Parse.png",
    },
    {
      name: "Postgres",
      logo: "Postgres.png",
    },
  ];

  const miscList = [
    {
      name: "Jenkins",
      logo: "Jenkins.png",
    },
    {
      name: "Webpack",
      logo: "Webpack.png",
    },
    {
      name: "Gulp",
      logo: "Gulp.png",
    },
    {
      name: "Docker",
      logo: "Docker.png",
    },
  ];

  return (
    <Container>
      <SkillsWrapper direction="column" align="flex-start">
        <Title size="38px" weight="700" textAlign="left" margin="16px 0">
          Skills & Technologies
        </Title>
        <Content justify="space-between" align="flex-start" margin="28px 0">
          <Column
            className="technologies-column"
            direction="column"
            margin="0 24px 0 0"
          >
            <SkillItem
              direction="column"
              align="flex-start"
              margin="0 0 24px 0"
            >
              <Text family={fonts.Montserrat} size="20px" weight="700">
                Frontend
              </Text>
              <TechItem
                percentage="85"
                title="Frontend"
                technologies={frontendList}
              />
            </SkillItem>
            <SkillItem direction="column" align="flex-start" margin="24px 0">
              <Text family={fonts.Montserrat} size="20px" weight="700">
                Backend
              </Text>
              <TechItem percentage="70" technologies={backendList} />
            </SkillItem>
            <SkillItem direction="column" align="flex-start" margin="24px 0">
              <Text family={fonts.Montserrat} size="20px" weight="700">
                Misc
              </Text>
              <TechItem percentage="60" technologies={miscList} />
            </SkillItem>
          </Column>
          <Column className="column" direction="column" margin="0 0 0 24px">
            <SkillItem direction="column" align="flex-start">
              <Text family={fonts.Montserrat} size="20px" weight="700">
                Languages
              </Text>
              <LanguageItem
                percentage="70"
                language="English"
                level="B2"
                title="TOEIC Listening & Reading"
              />
            </SkillItem>
            <SkillItem direction="column" align="flex-start">
              <LanguageItem
                percentage="100"
                language="Spanish"
                level="Native"
              />
            </SkillItem>
          </Column>
        </Content>
      </SkillsWrapper>
    </Container>
  );
};

export default Skills;
