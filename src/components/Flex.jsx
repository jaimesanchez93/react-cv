import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.background};
  ${(props) => props.width && `width: ${props.width};`}
`;

Flex.defaultProps = {
  direction: "row",
  align: "center",
  justify: "center",
  wrap: "nowrap",
  padding: "0",
  margin: "0",
  background: "inherit",
};

Flex.propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
};

export default Flex;
