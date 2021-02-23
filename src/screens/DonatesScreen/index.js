import React from 'react';
import {Container, TextDonate, WrapperImageDonate, ImageDonate} from './styles';
import ImageDonate1 from '../../assets/images/donate-image-1.png';
import ImageDonate2 from '../../assets/images/donate-image-2.png';

const DonatesScreen = () => {
  return (
    <Container>
      <TextDonate>
        O Comitê Local de Prevenção aos Impactos do Coronavírus do Campus Rio
        Pomba iniciou no dia 13 de abril de 2020 uma campanha de doações de
        cestas básicas, kits de higiene e folhetos educacionais sobre o
        coronavírus para distribuição entre famílias carentes da cidade.
      </TextDonate>
      <TextDonate>
        A campanha se dá por meio de depósito ou transferência bancária de
        qualquer valor para uma conta gerida pela Fundação de Apoio e
        Desenvolvimento ao Ensino, Pesquisa e Extensão (FADEPE), que gerencia a
        parte financeira dos projetos do Campus Rio Pomba. Atualmente, a cesta
        básica cotada pelo comitê possui custo-benefício com o valor de R$
        147,47 (em julho de 2020). O valor arrecadado será convertido
        integralmente na compra das cestas montadas através de orçamento e
        pesquisa de preço realizada pela equipe do Campus Rio Pomba.
      </TextDonate>
      <TextDonate>
        Até o momento, o comitê distribuiu 42 cestas básicas em maio, outras 42
        em junho e 48 em julho a famílias carentes da cidade. Além dos materiais
        adquiridos nos mercados de Rio Pomba, a equipe ainda acrescentou nas
        cestas máscaras laváveis, canetas e panfletos informativos sobre
        higienização. O processo logístico e financeiro foi intermediado pela
        FADEPE. A equipe ainda contou com o apoio do Centro de Referência de
        Assistência Social (CRAS).
      </TextDonate>
      <WrapperImageDonate>
        <ImageDonate source={ImageDonate1} />
      </WrapperImageDonate>
      <TextDonate>
        A campanha “Adote uma família” continua até dezembro. Para colaborar,
        basta fazer o depósito do valor na conta do Banco do Brasil que foi
        aberta exclusivamente para o recebimento das doações. Por conta da
        pandemia, não há taxas de manutenção, sendo todo dinheiro revertido em
        cestas básicas.
      </TextDonate>
      <TextDonate>
        A equipe propõe também a “adoção” de uma família para os que desejam
        doar o valor inteiro equivalente a uma cesta básica por mês durante esse
        período. No entanto, não há limite mínimo para doação, qualquer valor se
        soma à solidariedade dos demais para atender às famílias.
      </TextDonate>
      <TextDonate>
        A doação deve ser feita para a agência 1615-2 e conta-corrente 22836-9,
        aos cuidados da FADEPE. Também é importante enviar o comprovante do
        depósito para o Whatsapp (32) 98845-7769.
      </TextDonate>
      <WrapperImageDonate height={'480px'}>
        <ImageDonate source={ImageDonate2} />
      </WrapperImageDonate>
    </Container>
  );
};

export default DonatesScreen;
