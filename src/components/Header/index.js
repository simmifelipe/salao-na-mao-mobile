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
import { Dimensions, Linking, Share } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '../../store/modules/salao/actions';

const Header = () => {
  const dispatch = useDispatch();
  const { salao, servicos } = useSelector((state) => state.salao);

  return (
    <>
      <Cover width="100%" height="300px" image={salao.capa}>
        <GradientView
          colors={['#21232f33', '#21232fe6']}
          hasPadding
          justify="flex-end">
          <Badge color={salao.isOpened ? 'success' : 'danger'}>
            {salao.isOpened ? 'ABERTO' : 'FECHADO'}
          </Badge>

          <Title color="light">{salao.nome}</Title>

          <Text color="light" small>
            {salao?.endereco?.cidade} • {salao?.distance}kms
          </Text>
        </GradientView>
      </Cover>
      <Box
        background="light"
        align="center"
        width={`${Dimensions.get('window').width}px`}>
        <Box justify="space-between" hasPadding>
          <Touchable
            width="50px"
            direction="column"
            align="center"
            onPress={() => Linking.openURL(`tel:${salao.telefone}`)}>
            <Icon name="phone" size={24} color={theme.colors.muted} />
            <Text small spacing="10px 0 0">
              Ligar
            </Text>
          </Touchable>
          <Touchable
            onPress={() => {
              console.log(salao);
              Linking.openURL(
                `http://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${salao?.geo.coordinates[0]},${salao.geo.coordinates[1]}`,
              );
            }}
            width="50px"
            direction="column"
            align="center">
            <Icon name="map-marker" size={24} color={theme.colors.muted} />
            <Text small spacing="10px 0 0">
              Visitar
            </Text>
          </Touchable>
          <Touchable
            width="50px"
            direction="column"
            align="center"
            onPress={() => {
              Share.share({
                message: `${salao.nome} - Salão na mão`,
              });
            }}>
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
        <Title small>Serviços ({servicos.length})</Title>
        <TextInput
          placeholder="Digite o nome do serviço..."
          onChangeText={(value) => dispatch(updateForm({ inputFiltro: value }))}
          onFocus={() => dispatch(updateForm({ inputFiltroFocus: true }))}
          onBlur={() => dispatch(updateForm({ inputFiltroFocus: false }))}
        />
      </Box>
    </>
  );
};

export default Header;
