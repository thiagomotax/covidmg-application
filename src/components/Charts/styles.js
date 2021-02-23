import styled from 'styled-components';
import {LineChart} from 'react-native-chart-kit';
import {grey} from '../../utils/colors';

export const Container = styled.View`
  width: 93.5%;
  background: white;
  overflow: hidden;
  border: 1px solid ${grey};
  border-radius: 5px;
  margin: 0 auto;
  justify-content: center;
`;

export const TitleChart = styled.Text`
  padding: 2% 3%;
  margin: 10px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const Chart = styled(LineChart).attrs((props) => ({
  bezier: true,
  withInnerLines: false,
  withVerticalLabels: false,
}))`
  background: white;
`;

export const WrapperLabels = styled.View`
  padding: 0 8%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const Label = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextLabel = styled.Text``;

export const BulletLabel = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${({color}) => (color ? color : '#000')};
  margin-right: 4px;
`;
