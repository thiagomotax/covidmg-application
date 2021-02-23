import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './styles';
import {primary} from '../../utils/colors';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color={primary} size="large" />
    </Container>
  );
};

export default Loading;
