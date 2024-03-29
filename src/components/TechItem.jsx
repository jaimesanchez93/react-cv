/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Flex from "./Flex";
import Responsive from "./Responsive";
import { screenSize, colors } from "./Theme";
import Text from "./Text";

const Container = styled(Flex)`
  width: 100%;
  @media (max-width: ${screenSize.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const BarWrapper = styled(Responsive)`
  width: 100%;
`;

const ProgressBar = styled(Responsive)`
  height: 16px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const FillBar = styled.div`
  background-color: ${colors.caribeanGreen};
  height: 16px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const EmptyBar = styled.div`
  background-color: #f2f2f2;
  height: 16px;
  border-radius: 4px;
`;

const TechnologiesList = styled(Flex)`
  @media (max-width: ${screenSize.md}) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const TechnologyItem = styled(Flex)`
  @media (max-width: ${screenSize.md}) {
    margin: 16px;
  }
`;

const TechItem = ({ percentage, technologies }) => {
  const [progressBar, setProgressBar] = useState(0);

  const updatePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 1);
    }, 5);
  };

  useEffect(() => {
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) updatePercentage();
  }, [progressBar]);

  return (
    <Container direction="column" align="flex-start">
      <BarWrapper direction="column">
        <Text size="20px" margin="0 0 8px 0">{`${percentage}%`}</Text>
        <ProgressBar className="progress-bar">
          <FillBar style={{ width: `${progressBar}%` }} />
          <EmptyBar style={{ width: `calc(100% - ${progressBar}%)` }} />
        </ProgressBar>
        <TechnologiesList align="flex-start">
          {technologies.map((element) => {
            return (
              <TechnologyItem
                key={`${element}-tech-item`}
                direction="column"
                align="center"
                margin="0 16px"
              >
                <img
                  height="50px"
                  src={require(`../assets/${element.logo}`)}
                  alt={element.name}
                />
                <div style={{ textAlign: "center", marginTop: "8px" }}>
                  {element.name}
                </div>
              </TechnologyItem>
            );
          })}
        </TechnologiesList>
      </BarWrapper>
    </Container>
  );
};

export default TechItem;
