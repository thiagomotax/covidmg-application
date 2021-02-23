import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
  Container,
  SearchBar,
  WrapperList,
  List,
  ListHeaderItem,
  ListItem,
  ListItemText,
  ListHeaderItemText,
} from './styles';
import {HeaderContainer, HeaderTitle, IconLocation} from '../../styles';

import Requests from '../../services/request-api';
import Store from '../../store';
import {isEqual} from 'lodash';
import Loading from '../../components/Loading';

const ListCountyScreen = ({navigation}) => {
  const [allCounty, setAllCounty] = useState(null);
  const [countyStorage, setCountyStorage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  const getData = async () => {
    setLoading(true);

    try {
      const responseCountyStorage = JSON.parse(await Store.get('county_id'));
      setCountyStorage(responseCountyStorage);
      const response = await Requests.getDataSearchCounty();
      setAllCounty(response);
      console.log(response);
      navigation.setOptions({
        headerShown: true,
        headerTitle: (
          <HeaderContainer>
            <SearchBar />
          </HeaderContainer>
        ),
        headerLeft: null,
      });
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  const renderItem = useCallback(
    ({item}) => (
      <ListItem
        onPress={() => handleNavigation('HomeScreen', {county_id: item.id})}>
        {isEqual(countyStorage, item.id) && <IconLocation stroke={'#6979F8'} />}
        <ListItemText color={isEqual(countyStorage, item.id)}>
          {item.city}
        </ListItemText>
      </ListItem>
    ),
    [countyStorage, handleNavigation],
  );

  const keyExtractor = useCallback((item, index) => item + index, []);

  const renderSectionHeader = useCallback(({section: {title}}) => (
    <ListHeaderItem>
      <ListHeaderItemText>{title}</ListHeaderItemText>
    </ListHeaderItem>
  ));

  const handleNavigation = async (screen, params) => {
    await Store.set('county_id', parseInt(params.county_id));
    navigation.navigate(screen, params);
  };

  return (
    <Container>
      {!loading && !error && allCounty && (
        <>
          {/* <HeaderContainer>Cidades</HeaderContainer> */}
          <WrapperList>
            <List
              sections={allCounty}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
            />
          </WrapperList>
        </>
      )}

      {loading && <Loading />}
    </Container>
  );
};

export default ListCountyScreen;
