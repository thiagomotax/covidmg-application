import React, {useCallback} from 'react';
import {Container, ListTips} from './styles';

import {dataTips} from '../../utils/listTips';
import Tips from '../../components/Tips';

const TipsScreen = () => {
  const dataItem = dataTips;
  const renderItem = useCallback(
    ({item, index}) => <Tips data={item} index={index} />,
    [],
  );
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <Container>
      <ListTips
        data={dataItem}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default TipsScreen;
