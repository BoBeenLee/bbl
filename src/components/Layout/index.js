import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import _ from 'lodash';
import 'babel-polyfill';

import { media } from '../../utils/StyleUtils';
import Header from '../Header';
import { RouteTransition } from '../../facc';
import { BottomPopup } from '../Popup';
import { withThemes } from '../../hoc';
import { Footer } from '../Footer';
import config from '../../../config/SiteConfig';
import { isBrowser } from '../../utils/NavigatorUtils';
import './styles';

const Root = styled.div`
  height: 100%;
`;

const ContainerBox = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

const HeaderBox = styled.header`
  grid-area: header;
`;

const ContentBox = styled.main`
  grid-area: content;
  margin: 0 auto;
  padding: 20px 20px;
  
  ${media.mobile`
    width: 1px;
    min-width: 100%;
  `}
  /* height: 2000px; */
  ${media.desktop`
    max-width: ${props => props.theme.desktopSize}px;
  `};
`;

const FooterBox = styled.footer`
  grid-area: footer;
`;

const StatePopupBox = styled(BottomPopup)`
  display: ${({ isShowStatePopup }) => (isShowStatePopup ? 'flex' : 'none')};
  color: ${props => props.theme.warning};
`;

class Layout extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static defaultProps = {
    children: "",
  }

  state = {
    isShowStatePopup: false,
  };

  componentDidMount() {
    isBrowser && window.addEventListener('offline', this.handleOffline);
    isBrowser && window.addEventListener('online', this.handleOnline);
  }

  handleOffline = () => {
    this.setState({ isShowStatePopup: true });
  };

  handleOnline = () => {
    this.setState({ isShowStatePopup: false });
  };

  _renderHelmet = () => {
    const metas = _.map(
      _.pick(config, ['description', 'keywords']),
      (value, key) => ({
        name: key,
        content: value,
      }),
    );
    return <Helmet title="BoBeen Lee" meta={metas} />;
  };

  render() {
    const { children, pathname } = this.props;
    const { isShowStatePopup } = this.state;
    return (
      <Root id="outer-container">
        <StatePopupBox isShowStatePopup={isShowStatePopup}>
          <span>
            Your computer seems to be offline. We&apos;ll keep trying, but there may
            be a problem with your connection.
          </span>
        </StatePopupBox>
        {this._renderHelmet()}
        <ContainerBox>
          <HeaderBox>
            <Header />
          </HeaderBox>
          <RouteTransition
            pathname={pathname}
          >
            {
              ({ key, style }) =>
                (
                  <ContentBox
                    key={key}
                    style={{
                      opacity: style.opacity,
                      transform: `translate3d(0, ${style.translateY}px, 0)`,
                    }}
                    id="page-box"
                  >
                    {children}
                  </ContentBox>
                )
            }
          </RouteTransition>
          <FooterBox>
            <Footer />
          </FooterBox>
        </ContainerBox>
      </Root>
    );
  }
}

export default withThemes(Layout);