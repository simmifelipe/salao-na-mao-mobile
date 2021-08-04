import React from 'react';
import moment from 'moment';
import { Box, Button, Cover, Text, Touchable } from '../../styles';
import consts from '../../consts';
import { useDispatch } from 'react-redux';
import {
  filterAgenda,
  updateAgendamento,
} from '../../store/modules/salao/actions';

const Servico = ({ servico }) => {
  const dispatch = useDispatch();

  return (
    <Touchable
      hasPadding
      background="light"
      height="100px"
      align="center"
      onPress={() => {
        dispatch(updateAgendamento({ servicoId: servico._id }));
        dispatch(filterAgenda());
      }}>
      <Cover image={`${consts.bucketUrl}/${servico?.arquivos[0]?.caminho}`} />

      <Box direction="column">
        <Text bold color="dark">
          {servico.titulo}
        </Text>
        <Text small>
          R$ {servico.preco} • {servico.duracao} min
        </Text>
      </Box>

      <Box>
        <Button
          icon="clock-check-outline"
          background="success"
          mode="contained">
          Agendar
        </Button>
      </Box>
    </Touchable>
  );
};

export default Servico;
