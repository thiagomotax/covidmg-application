import styled from 'styled-components';
import {grey, primary} from '../../utils/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const SearchBar = styled.TextInput.attrs({
  placeholder: 'Pesquise por municípios, regiões ou estados de MG',
  autoFocus: true,
})`
  width: 80%;
  height: 40px;
  padding: 0 2%;
  border-radius: 4px;
  margin-left: 10px;
  background: #00000009;
`;

export const WrapperList = styled.View``;

export const List = styled.SectionList.attrs({
  bounces: false,
  contentContainerStyle: {
    paddingBottom: '15%',
  },
})``;

export const ListHeaderItem = styled.View`
  background: white;
  padding: 4% 3%;
  background: white;
  border: 1px solid transparent;
  border-bottom-color: ${grey};
`;

export const ListHeaderItemText = styled.Text`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;

export const ListItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: white;
  padding: 4% 3%;
  margin: 1% 3%;
  background: white;
  border: 1px solid ${grey};
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
`;

export const ListItemText = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: ${({color}) => (color ? 400 : 300)};
  color: ${({color}) => (color ? primary : '#000')};
`;

export const SeparatorListView = styled.View`
  width: 100%;
  height: 20px;
`;
