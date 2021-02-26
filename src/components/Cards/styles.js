import styled from 'styled-components';
import {
  grey,
  primary,
  discard,
  rip,
  recovered,
  suspect,
} from '../../utils/colors';
// import ConfirmedSVG from '../../assets/icons/alert-triangle.svg';
// import DiscardSVG from '../../assets/icons/close.svg';
// import RecoverdSVG from '../../assets/icons/check.svg';
// import RipSVG from '../../assets/icons/cross.svg';
// import SuspectSVG from '../../assets/icons/eye.svg';

import ConfirmedSVG from '../../assets/icons/confirmedv2.svg';
import DiscardSVG from '../../assets/icons/discardv2.svg';
import RecoverdSVG from '../../assets/icons/recoveredv2.svg';
import RipSVG from '../../assets/icons/ripv2.svg';
import SuspectSVG from '../../assets/icons/suspectv2.svg';

export const ContainerCard = styled.View`
  width: ${({isLastCard}) => (!isLastCard ? '48%' : '100%')};
  padding: 3%;
  margin-bottom: 3%;
  border: 1.8px solid ${grey};
  border-radius: 5px;
  border-left-color: ${({stroke = grey}) => stroke};
  flex-direction: row;
  align-items: center;
`;

export const WrapperTitleCard = styled.View`
  /* background: ${({background = 'transparent'}) => background}; */
  border-radius: 45px;
  margin-left: 10px;
`;

export const NumberCard = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${({color = '#000'}) => color};
`;

export const TitleCard = styled.Text`
  font-weight: 400;
  opacity: 0.6;
  margin-bottom: 2px;
`;

export const IconConfirmed = styled(ConfirmedSVG).attrs({
  width: 40,
  height: 40,
  stroke: primary,
})``;

export const IconDiscard = styled(DiscardSVG).attrs({
  width: 40,
  height: 40,
  stroke: discard,
})``;

export const IconRecovered = styled(RecoverdSVG).attrs({
  width: 40,
  height: 40,
  stroke: recovered,
})``;

export const IconRip = styled(RipSVG).attrs({
  width: 40,
  height: 40,
  stroke: rip,
})`
  position: relative;
`;

export const IconSuspect = styled(SuspectSVG).attrs({
  width: 40,
  height: 40,
  stroke: suspect,
})`
  position: relative;
  left: -5px;
`;
