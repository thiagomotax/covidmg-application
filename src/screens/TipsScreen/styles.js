import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #ffff;
`;

export const ListTips = styled.FlatList.attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: '4%',
    paddingBottom: '1%',
  },
})``;
