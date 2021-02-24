import styled from 'styled-components';
import Location from '../assets/icons/location.svg';
import Back from '../assets/icons/arrow-back.svg';
import Search from '../assets/icons/search.svg';
import Home from '../assets/icons/home.svg';
import Tips from '../assets/icons/lightbulb.svg';
import Donates from '../assets/icons/dollar-sign.svg';

import {primary} from '../utils/colors';

export const SafeAreaViewHeader = styled.SafeAreaView`
  height: 70px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  min-width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
`;

export const IconLocation = styled(Location).attrs((props) => ({
  width: 25,
  height: 25,
  stroke: props.stroke ? props.stroke : '#000',
}))`
  margin-right: 8px;
`;

export const IconBack = styled(Back).attrs((props) => ({
  width: 25,
  height: 25,
  stroke: props.stroke ? props.stroke : '#000',
}))`
  margin: 0 8px;
`;

export const HeaderTitle = styled.Text`
  width: 83%;
  font-size: 18px;
  font-weight: 400;
  color: ${({color = '#000'}) => color};
`;

export const IconSearch = styled(Search).attrs({
  width: 25,
  height: 25,
  stroke: '#000',
})``;

export const IconHome = styled(Home).attrs(({routeState}) => ({
  width: 28,
  height: 28,
  stroke: routeState ? primary : '#00000060',
}))``;

export const IconTips = styled(Tips).attrs(({routeState}) => ({
  width: 28,
  height: 28,
  stroke: routeState ? primary : '#00000060',
}))``;

export const IconDonates = styled(Donates).attrs(({routeState}) => ({
  width: 28,
  height: 28,
  stroke: routeState ? primary : '#00000060',
}))``;

export const LabelTabBar = styled.Text`
  color: ${({routeState}) => (routeState ? primary : '#00000060')};
  font-weight: ${({routeState}) => (routeState ? 600 : 200)};
  font-size: 12px;
  position: relative;
  top: 2px;
`;
