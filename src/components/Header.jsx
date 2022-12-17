/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flex from "./Flex";
import Responsive from "./Responsive";
import { screenSize } from "./Theme";
import { ReactComponent as Ellipse } from "../assets/Ellipse_5.svg";
import { useResponsive } from "../lib/ResponsiveProvider";

const HeaderWrapper = styled(Flex)`
  position: relative;
  @media (max-width: ${screenSize.md}) {
    margin: 24px 0;
  }
`;

const TitleRow = styled(Responsive)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 200px;

  @media (max-width: ${screenSize.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderTitle = styled.div`
  font-family: "Montserrat";
  font-size: 30px;
  font-weight: regular;

  @media (max-width: ${screenSize.md}) {
    text-align: center;
  }
`;

const NameSpan = styled.span`
  font-weight: bold;
`;

const JobTitle = styled.span`
  color: #0cceaf;
`;

const ContactRow = styled(Responsive)`
  justify-content: "flex-end";
  z-index: 2;
  & * {
    margin: 0 15px;
  }
  @media (max-width: ${screenSize.md}) {
    justify-content: "center";
  }
`;

const IconLink = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0;
  border: 0px;
  font-size: 20px;
  cursor: pointer;
`;

export default function Header() {
  const { responsive } = useResponsive();

  return (
    <HeaderWrapper
      className="header-wrapper"
      direction="column"
      align="center"
      justify="center"
    >
      <Ellipse
        width={responsive ? "350" : "100%"}
        style={{ position: "absolute" }}
      />
      <TitleRow>
        <HeaderTitle>
          Hello, I am <NameSpan>Jaime Sánchez Pedrós</NameSpan>
          ,
          <br />
          <JobTitle>software engineer </JobTitle>
          with experience in
          <br />
          web development.
        </HeaderTitle>
      </TitleRow>
      <ContactRow align="center">
        <IconLink href="https://www.github.com/jaimesanchez93/" target="_blank">
          <FontAwesomeIcon color="#0CCEAF" size="2x" icon={["fab", "github"]} />
        </IconLink>
        <IconLink href="tel:667682756">
          <FontAwesomeIcon
            color="#0CCEAF"
            size="2x"
            icon={["fas", "phone-alt"]}
          />
        </IconLink>
        <IconLink href="mailto:jaimesanchez.93@gmail.com">
          <FontAwesomeIcon
            color="#0CCEAF"
            size="2x"
            icon={["fas", "envelope"]}
          />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/jaime-sanchez-pedros"
          target="_blank"
        >
          <FontAwesomeIcon
            color="#0CCEAF"
            size="2x"
            icon={["fab", "linkedin"]}
          />
        </IconLink>
      </ContactRow>
    </HeaderWrapper>
  );
}
