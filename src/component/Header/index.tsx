import React, {memo} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {StyledIcon} from "@/components/CommonStyled";
import {goBack} from "@/utils/navigation";

const IconBack = styled.Image`
  tint-color: ${p => p.theme.grey1};
  width: 24px;
  height: 24px;
`;

const IconBackWhite = styled(IconBack)`
  tint-color: white;
`;

const BackButtonWrapperView = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;


export const NavigationBackButtonUI = memo(() => {
  return (
    <BackButtonWrapperView>
      <IconBack source={require('@/assets/icons/arrow-left.png')} />
    </BackButtonWrapperView>
  );
});

export const WhiteBackButtonUI = memo(() => {
  return (
    <BackButtonWrapperView>
      <IconBackWhite source={require('@/assets/icons/arrow-left.png')} />
    </BackButtonWrapperView>
  );
});
