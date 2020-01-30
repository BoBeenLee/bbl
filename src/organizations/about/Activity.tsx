import _ from "lodash";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { Separator } from "src/components/Separator";
import { LineText } from "src/components/Text";
import { ContentTitle, SubTitle } from "src/components/Title";
import { media } from "src/utils/media";
import { IActivity, activity } from "src/constants/activity";

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 10px;
  margin-bottom: 15px;

  ${media.mobile`
    grid-template-columns: 1fr;
  `};
`;

const TitleBox = styled(ContentTitle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const ContentBox = styled(LineText)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomSeparator = styled(Separator)`
  margin: 40px 0;
`;

class Activity extends PureComponent {
  public render() {
    return (
      <Root>
        <SubTitleBox title="Activity" />
        {_.map(activity, item => this.renderItem(item))}
        <BottomSeparator />
      </Root>
    );
  }

  private renderItem = (item: IActivity) => (
    <ItemBox key={item.name}>
      <TitleBox title={item.name} uri={item.url} />
      <ContentBox>{item.description}</ContentBox>
    </ItemBox>
  );
}

export default Activity;
