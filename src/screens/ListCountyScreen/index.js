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
  SeparatorListView,
} from './styles';

import {
  SafeAreaViewHeader,
  HeaderContainer,
  HeaderButton,
  IconBack,
  IconLocation,
} from '../../styles';

import Requests from '../../services/request-api';
import Store from '../../store';
import {isEqual, isEmpty, reject} from 'lodash';
import Loading from '../../components/Loading';

const ListCountyScreen = ({navigation}) => {
  const [allCounty, setAllCounty] = useState(null);
  const [allCountyFilter, setAllCountyFilter] = useState(null);
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
      setAllCountyFilter(response);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  const renderItem = useCallback(
    ({item}) => {
      if (item && item.id && item.city) {
        return (
          <ListItem
            onPress={() =>
              handleNavigation('HomeScreen', {county_id: item.id})
            }>
            {isEqual(countyStorage ? countyStorage : 57, item.id) && (
              <IconLocation stroke={'#6979F8'} />
            )}
            <ListItemText
              color={isEqual(countyStorage ? countyStorage : 57, item.id)}>
              {item.city}
            </ListItemText>
          </ListItem>
        );
      }
    },
    [countyStorage, handleNavigation],
  );

  const keyExtractor = useCallback((item, index) => item + index, []);

  const renderSectionHeader = useCallback(({section: {title, data}}) => {
    if (title && data.length) {
      return (
        <ListHeaderItem>
          <ListHeaderItemText>{title}</ListHeaderItemText>
        </ListHeaderItem>
      );
    }
  });

  const handleNavigation = async (screen, params) => {
    await Store.set('county_id', parseInt(params.county_id));
    navigation.navigate(screen, params);
  };

  const filterListSearch = (value) => {
    if (value !== '') {
      const filter = allCounty.map((county, index) => {
        const filterData = county.data.filter((item) => {
          if (item.city.toLowerCase().includes(value.toLowerCase())) {
            return county;
          }
        });
        console.log(filterData);
        // county.data = filterData;
        return {title: county.title, data: filterData};
      });
      setAllCountyFilter(filter);
    } else {
      setAllCountyFilter(allCounty);
    }
    // console.log(allCountyFilter);
  };

  return (
    <Container>
      {!loading && !error && allCounty && (
        <>
          <SafeAreaViewHeader>
            <HeaderButton onPress={() => navigation.goBack()}>
              <IconBack />
            </HeaderButton>
            <HeaderContainer>
              <SearchBar
                editable={true}
                onChangeText={(value) => filterListSearch(value)}
              />
            </HeaderContainer>
          </SafeAreaViewHeader>

          <WrapperList>
            <List
              sections={allCountyFilter}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
              SectionSeparatorComponent={() => <SeparatorListView />}
              automaticallyAdjustContentInsets={false}
            />
          </WrapperList>
        </>
      )}

      {loading && <Loading />}
    </Container>
  );
};

export default ListCountyScreen;
