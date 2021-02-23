import React from 'react';
import {
  ContainerCard,
  WrapperTitleCard,
  TitleCard,
  NumberCard,
  IconConfirmed,
  IconDiscard,
  IconRecovered,
  IconRip,
  IconSuspect,
} from './styles';

const Cards = ({data}) => {
  const checkIconData = (item, color) => {
    switch (item.label) {
      case 'Confirmados':
        return <IconConfirmed />;
      case 'Descartados':
        return <IconDiscard />;
      case 'Recuperados':
        return <IconRecovered />;
      case 'Óbitos':
        return <IconRip />;
      case 'Suspeitos':
        return <IconSuspect />;
    }
  };
  return (
    <ContainerCard stroke={data.color}>
      <WrapperTitleCard>
        {checkIconData(data)}
        <NumberCard>{data.value}</NumberCard>
      </WrapperTitleCard>
      <TitleCard>{data.label}</TitleCard>
    </ContainerCard>
  );
};

export default Cards;
