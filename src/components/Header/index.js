import React from 'react';
import {
  Badge,
  Cover,
  GradientView,
  Text,
  Title,
  Touchable,
  Box,
  Button,
  TextInput,
} from '../../styles';

import theme from '../../styles/theme.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

const Header = () => {
  return (
    <>
      <Cover
        width="100%"
        height="300px"
        image="https://i1.wp.com/www.belasis.com.br/wp-content/uploads/2020/12/como-montar-um-salao-de-beleza.jpg">
        <GradientView
          colors={['#21232f33', '#21232fe6']}
          hasPadding
          justify="flex-end">
          <Badge color="success">ABERTO</Badge>

          <Title color="light">Salão teste</Title>

          <Text color="light" small>
            Salvador do Sul • 5.2kms
          </Text>
        </GradientView>
      </Cover>
      <Box
        background="light"
        align="center"
        width={`${Dimensions.get('window').width}px`}>
        <Box justify="space-between" hasPadding>
          <Touchable width="50px" direction="column" align="center">
            <Icon name="phone" size={24} color={theme.colors.muted} />
            <Text small spacing="10px 0 0">
              Ligar
            </Text>
          </Touchable>
          <Touchable width="50px" direction="column" align="center">
            <Icon name="map-marker" size={24} color={theme.colors.muted} />
            <Text small spacing="10px 0 0">
              Visitar
            </Text>
          </Touchable>
          <Touchable width="50px" direction="column" align="center">
            <Icon name="share" size={24} color={theme.colors.muted} />
            <Text small spacing="10px 0 0">
              Enviar
            </Text>
          </Touchable>
        </Box>
        <Box hasPadding direction="column" align="center" justify="center">
          <Button
            icon="clock-check-outline"
            background="success"
            mode="contained"
            uppercase={false}>
            Agendar agora
          </Button>
          <Text small spacing="10px 0 0">
            Horários disponíveis
          </Text>
        </Box>
      </Box>

      <Box direction="column" hasPadding background="light" spacing="10px 0 0">
        <Title small>Serviços (2)</Title>
        <TextInput placeholder="Digite o nome do serviço..." />
      </Box>
    </>
  );
};

export default Header;
