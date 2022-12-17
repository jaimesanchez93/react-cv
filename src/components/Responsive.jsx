import styled from "styled-components";
import PropTypes from "prop-types";
import Flex from "./Flex";
import { screenSize } from "./Theme";

const Responsive = styled(Flex)`
  width: 100%;
  @media (min-width: ${screenSize.xl}) {
    max-width: ${(props) => (props.fullWidth ? screenSize.xl : screenSize.lg)};
  }
  @media (min-width: ${screenSize.lg}) and (max-width: ${screenSize.xl}) {
    max-width: ${(props) => (props.fullWidth ? screenSize.lg : screenSize.md)};
  }
  @media (min-width: ${screenSize.md}) and (max-width: ${screenSize.lg}) {
    max-width: ${(props) => (props.fullWidth ? screenSize.md : screenSize.sm)};
  }
  @media (max-width: ${screenSize.md}) {
    max-width: ${screenSize.sm};
  }
`;

Responsive.defaultProps = {
  fullWidth: false,
};

Responsive.propTypes = {
  fullWidth: PropTypes.bool,
};

export default Responsive;
