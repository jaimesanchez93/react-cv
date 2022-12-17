import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  text-transform: ${(props) => props.transform};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  text-decoration: ${(props) => props.textDecoration};
`;

Text.defaultProps = {
  size: "12px",
  family: "Montserrat",
  weight: "300",
  transform: "none",
  lineHeight: "20px",
  color: "#000",
  textAlign: "left",
  padding: "0",
  margin: "0",
  textDecoration: "none",
};

Text.propTypes = {
  size: PropTypes.string,
  family: PropTypes.string,
  weight: PropTypes.string,
  transform: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  textDecoration: PropTypes.string,
};

export default Text;
