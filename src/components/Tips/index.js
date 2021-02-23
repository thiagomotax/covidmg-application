import React from 'react';
import {
  Container,
  BulletTextOrderTips,
  TextOrderTips,
  TextTips,
} from './styles';

const Tips = ({data, index}) => {
  return (
    <Container>
      {data && data.text && (
        <>
          <BulletTextOrderTips>
            <TextOrderTips> {index + 1}</TextOrderTips>
          </BulletTextOrderTips>
          <TextTips>{data.text}</TextTips>
        </>
      )}
    </Container>
  );
};

export default Tips;
