import styled from 'styled-components';
import {grey} from '../../utils/colors';

export const Container = styled.ScrollView.attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: white;
`;

export const TextDonate = styled.Text`
  padding: 0 5%;
  margin-top: 3%;
`;

export const WrapperImageDonate = styled.View`
  width: 90%;
  height: ${({height = '200px'}) => height};
  margin: 4% auto;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid ${grey};
`;

export const ImageDonate = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
