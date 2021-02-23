import styled from 'styled-components';
import {grey, primary} from '../../utils/colors';

export const Container = styled.View`
  margin: 0 5%;
  margin-bottom: 3%;
  padding: 2%;
  border: 1px solid ${grey};
  border-radius: 5px;
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

export const BulletTextOrderTips = styled.Text`
  position: relative;
  /* background: red; */
  width: 45px;
  height: 40px;
  top: -4px;
  margin-right: 13px;
`;

export const TextOrderTips = styled.Text`
  font-weight: 100;
  font-size: 40px;
  color: ${primary};
  opacity: 0.5;
`;

export const TextTips = styled.Text`
  /* margin-top: 35px; */
  font-size: 14px;
  width: 83%;
`;
