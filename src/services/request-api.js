import api from './axios-config';
import _, {head, chain, map, orderBy, value} from 'lodash';
import {
  primary,
  rip,
  recovered,
  suspect,
  discard,
  primaryBackground,
  discardBackground,
  recoveredBackground,
  ripBackground,
  suspectBackground,
} from '../utils/colors';

export class Requests {
  getDataCounty = async (county_id = 57) => {
    const response = await api.get(`/ajax/casos/getDadosApp/${county_id}`);
    return {
      id: parseInt(head(response.data).id),
      municipio: head(response.data).municipio,
      data: [
        {
          label: 'Confirmados',
          color: primary,
          background: primaryBackground,
          value: head(response.data).confirmados
            ? head(response.data).confirmados
            : 0,
        },
        {
          label: 'Descartados',
          color: discard,
          background: discardBackground,
          value: head(response.data).descartados
            ? head(response.data).descartados
            : 0,
        },
        {
          label: 'Recuperados',
          color: recovered,
          background: recoveredBackground,
          value: head(response.data).recuperados
            ? head(response.data).recuperados
            : 0,
        },
        {
          label: 'Óbitos',
          color: rip,
          background: ripBackground,
          value: head(response.data).obitos ? head(response.data).obitos : 0,
        },
        {
          label: 'Suspeitos',
          color: suspect,
          background: suspectBackground,
          value: head(response.data).suspeitos
            ? head(response.data).suspeitos
            : 0,
        },
      ],
    };
  };

  getDataSearchCounty = async () => {
    const response = await api.get('/ajax/pesquisa/getdadosmobile');
    var formatResponse = chain(response.data)
      .map((data, title) => ({
        title:
          title === 'jf'
            ? 'Região de Juiz de Fora'
            : title === 'entornos'
            ? 'Entornos'
            : 'Região de Ubá',
        data: orderBy(
          data.map((data) => ({
            id: parseInt(data[1]),
            city: data[0],
          })),
          ['city'],
          ['asc'],
        ),
        index: title === 'jf' ? 2 : title === 'entornos' ? 3 : 1,
      }))
      .value();

    return orderBy(formatResponse, ['title'], ['desc']);
  };

  getDataCountyCharts = async (county_id = 57) => {
    const response = await api.get(`/Ajax/Graficos/getDados/${county_id}`);
    return [
      {
        id: 0,
        data: map(response.data, 'confirmados'),
        color: () => primary,
      },
      {
        id: 1,
        data: map(response.data, 'recuperados'),
        color: () => recovered,
      },
      {
        id: 2,
        data: map(response.data, 'obitos'),
        color: () => rip,
      },
    ];
  };
}

export default new Requests();
