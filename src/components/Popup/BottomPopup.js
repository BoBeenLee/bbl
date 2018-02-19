import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.bgColor};
  border-top: 1px solid ${props => props.theme.lineColor};
  z-index: 10;
  position: fixed;
  bottom: 0;
`;

class BottomPopup extends PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { children, ...rest } = this.props;
    return <Root {...rest}>{children}</Root>;
  }
}

export default BottomPopup;