import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const WrapperCards = styled.View``;

export const ListCards = styled.FlatList.attrs({
  bounces: false,
  horizontal: false,
  numColumns: 2,
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
  contentContainerStyle: {
    padding: '2%',
    paddingTop: '4%',
  },
  showsVerticalScrollIndicator: false,
})``;
