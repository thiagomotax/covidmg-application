import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const WrapperCards = styled.View`
  /* padding: 3%; */
`;

export const ListCards = styled.FlatList.attrs({
  bounces: false,
  horizontal: false,
  numColumns: 2,
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
  showsVerticalScrollIndicator: false,
})`
  padding-top: 30px;
`;
