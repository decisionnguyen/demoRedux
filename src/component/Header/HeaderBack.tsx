import React, {memo, ReactElement} from 'react';
import styled from "styled-components/native";
import {TextStyle, ViewStyle} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {IC_BACK} from "../../assets";
import { useNavigation } from '@react-navigation/native';

const Container = styled.View<{withDivider?: boolean}>`
  height: ${getStatusBarHeight() + 56}px;
  background-color: #fff;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  border-bottom-width: ${p => p.withDivider ? 1 : 0}px;
  border-bottom-color: #DEDEDE;
`;

const Left = styled.TouchableOpacity`
  width: 60px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Right = styled.View`
  width: 60px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
`;

const Icon = styled.Image<{ color?: string }>`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.color || '#111'};
`;

const BannerText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

interface Props {
    title: string,
    right?: ReactElement,
    center?: ReactElement,
    rightContainerStyle?: ViewStyle,
    containerStyle?: ViewStyle,
    backColor?: string,
    numberOfLines?: number,
    titleStyle?: TextStyle,
    withDivider?: boolean
}

export const HeaderBack = memo(function HomeHeader(props: Props) {
    const {title, right, center, rightContainerStyle, containerStyle, numberOfLines, backColor, withDivider,titleStyle} = props;
    const navigation = useNavigation()
    return (
        <Container style={containerStyle} withDivider={withDivider}>
            <Left onPress={navigation.goBack}>
                <Icon source={IC_BACK} color={backColor}/>
            </Left>
            <Center>
                {
                    center
                        ? center
                        : <BannerText
                            numberOfLines={numberOfLines || 1}
                            style={titleStyle}>
                            {title}
                        </BannerText>
                }
            </Center>
            <Right style={rightContainerStyle}>
                {right ? right : null}
            </Right>
        </Container>
    )
});
