import React, { Component, PureComponent } from "react";
import styled from "styled-components";

interface IProps {
  title: string;
}

const Root = styled.div`
  font-size: 30px;
  font-weight: 100;
  color: ${props => props.theme.third};
`;

class SubTitle extends PureComponent<IProps> {
  public static defaultProps = {
    title: "Hello World"
  };
  public render() {
    const { title, ...rest } = this.props;
    return <Root {...rest}>{title}</Root>;
  }
}

export default SubTitle;
