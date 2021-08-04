import React from 'react';
import { useDispatch } from 'react-redux';
import { updateForm } from '../../../store/modules/salao/actions';
import { Box, Button, Cover, Text, Touchable } from '../../../styles';
import theme from '../../../styles/theme.json';

const EspecialistaPicker = ({ colaboradores, agendamento }) => {
  const dispatch = useDispatch();

  const colaborador = colaboradores.filter(
    (c) => c._id === agendamento.colaboradorId,
  )[0];

  return (
    <>
      <Text bold hasPadding removePaddingBottom color="dark">
        Gostaria de trocar o(a) especialista?
      </Text>
      <Box hasPadding removePaddingBottom>
        <Box align="center">
          <Cover width="45px" height="45px" circle image={colaborador?.foto} />
          <Text small>{colaborador?.nome}</Text>
        </Box>
        <Box>
          <Touchable
            onPress={() => dispatch(updateForm({ modalEspecialista: true }))}>
            <Button
              uppercase={false}
              textColor="muted"
              background={theme.colors.light}
              block
              mode="contained">
              Trocar Especialista
            </Button>
          </Touchable>
        </Box>
      </Box>
    </>
  );
};

export default EspecialistaPicker;
