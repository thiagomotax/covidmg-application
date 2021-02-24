import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Container, WrapperCards, ListCards} from './styles';

import Cards from '../../components/Cards';

import {
  HeaderContainer,
  HeaderButton,
  IconLocation,
  HeaderTitle,
} from '../../styles';

import Requests from '../../services/request-api';
import Store from '../../store';

import Charts from '../../components/Charts';
import Loading from '../../components/Loading';

const HomeScreen = ({navigation}) => {
  const [county, setCounty] = useState(null);
  const [idCountyStorage, setIdCountyStorage] = useState(null);
  const [countyCharts, setCountyCharts] = useState(null);
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
      let responseCountyStorage = JSON.parse(await Store.get('county_id'));
      console.log(responseCountyStorage);
      const responseChart = await Requests.getDataCountyCharts(
        responseCountyStorage ? responseCountyStorage : 57,
      );
      setCountyCharts(responseChart);
      setIdCountyStorage(responseCountyStorage ? responseCountyStorage : 57);
      var response = await Requests.getDataCounty(
        responseCountyStorage ? responseCountyStorage : 57,
      );
      console.log(response);
      setCounty(response);
      navigation.setOptions({
        headerShown: true,
        headerTitle: (
          <HeaderContainer>
            <HeaderButton
              onPress={() =>
                handleNavigation('ListCounty', {id_county: idCountyStorage})
              }>
              {response && response.municipio && (
                <>
                  <IconLocation />
                  <HeaderTitle>{response.municipio}</HeaderTitle>
                </>
              )}
            </HeaderButton>
          </HeaderContainer>
        ),
      });
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  const handleNavigation = (screen, params) => {
    navigation.navigate(screen, params);
  };

  const renderItem = useCallback(({item}) => <Cards data={item} />, []);
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <Container>
      {!loading && !error && county && countyCharts && (
        <>
          <WrapperCards>
            <ListCards
              bounces={false}
              data={county.data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              ListFooterComponent={<Charts dataCountyCharts={countyCharts} />}
            />
          </WrapperCards>
        </>
      )}
      {loading && <Loading />}

      {/* {error && (
        <ContainerError
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TextFilter>Ocorreu um erro inexperado!</TextFilter>
        </ContainerError>
      )}  */}
    </Container>
  );
};

export default HomeScreen;
