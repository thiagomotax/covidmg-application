import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Dimensions} from 'react-native';

import {
  Container,
  TitleChart,
  Chart,
  WrapperLabels,
  Label,
  TextLabel,
  BulletLabel,
} from './styles';

import {filter, includes, find} from 'lodash';

import {primary, recovered, rip} from '../../utils/colors';
const Charts = ({dataCountyCharts}) => {
  const [dataCounty, setdataCounty] = useState(null);
  const [AlldataCounty, setAlldataCounty] = useState(null);
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
      setdataCounty(dataCountyCharts);
      setAlldataCounty(dataCountyCharts);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    barPercentage: 0.5,
    color: (opacity = 1) => '#000',
    fillShadowGradient: 'skyblue',
    fillShadowGradientOpacity: 0,
    strokeWidth: 2, // optional, default 3
    propsForDots: {
      r: '0',
      strokeWidth: '2',
      stroke: 'red',
      opacity: 0,
    },
  };

  const handleChangeLine = (id) => {
    if (find(dataCounty, {id}) && dataCounty.length - 1 >= 1) {
      const filterData = dataCounty.filter((data) => {
        if (data.id !== id) {
          return data;
        }
      });
      setdataCounty(filterData);
    }
    if (!find(dataCounty, {id})) {
      setdataCounty([...dataCounty, find(AlldataCounty, {id})]);
    }
  };

  return (
    <>
      {!loading && !error && dataCounty && (
        <Container>
          <TitleChart>Gráficos</TitleChart>
          <Chart
            data={{
              datasets: dataCounty,
            }}
            width={Dimensions.get('window').width - 80}
            height={240}
            chartConfig={chartConfig}
            animate
          />

          <WrapperLabels>
            <Label onPress={() => handleChangeLine(0)}>
              <BulletLabel color={primary} />
              <TextLabel>Confirmados</TextLabel>
            </Label>
            <Label onPress={() => handleChangeLine(1)}>
              <BulletLabel color={recovered} />
              <TextLabel>Recuperados</TextLabel>
            </Label>
            <Label onPress={() => handleChangeLine(2)}>
              <BulletLabel color={rip} />
              <TextLabel>Óbitos</TextLabel>
            </Label>
          </WrapperLabels>
        </Container>
      )}
    </>
  );
};

export default Charts;
