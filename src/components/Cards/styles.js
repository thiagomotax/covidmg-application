import styled from 'styled-components';
import {
  grey,
  primary,
  discard,
  rip,
  recovered,
  suspect,
} from '../../utils/colors';
import ConfirmedSVG from '../../assets/icons/alert-triangle.svg';
import DiscardSVG from '../../assets/icons/close.svg';
import RecoverdSVG from '../../assets/icons/check.svg';
import RipSVG from '../../assets/icons/cross.svg';
import SuspectSVG from '../../assets/icons/eye.svg';

export const ContainerCard = styled.View`
  width: 48%;
  /* height: 200px; */
  padding: 3%;
  margin-bottom: 3.5%;
  border: 1px solid ${grey};
  border-radius: 5px;
  border-left-color: ${({stroke = grey}) => stroke};
`;

export const WrapperTitleCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleCard = styled.Text`
  font-weight: 200;
  margin-top: 5px;
`;

export const IconConfirmed = styled(ConfirmedSVG).attrs({
  width: 32,
  height: 32,
  stroke: primary,
})``;

export const IconDiscard = styled(DiscardSVG).attrs({
  width: 32,
  height: 32,
  stroke: discard,
})``;

export const IconRecovered = styled(RecoverdSVG).attrs({
  width: 32,
  height: 32,
  stroke: recovered,
})``;

export const IconRip = styled(RipSVG).attrs({
  width: 32,
  height: 32,
  stroke: rip,
})``;

export const IconSuspect = styled(SuspectSVG).attrs({
  width: 32,
  height: 32,
  stroke: suspect,
})``;

export const NumberCard = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-left: 10px;
  color: ${({color = '#000'}) => color};
`;
