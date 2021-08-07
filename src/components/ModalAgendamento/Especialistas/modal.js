import moment from 'moment';
import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-simple-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAgendamento,
  updateForm,
} from '../../../store/modules/salao/actions';

import { Box, Cover, Text, Touchable } from '../../../styles';
import theme from '../../../styles/theme.json';

const EspecialistasModal = ({
  form,
  colaboradores,
  agendamento,
  servicos,
  horaSelecionada,
  colaboradoresDia,
}) => {
  const dispatch = useDispatch();

  const colaboradoresIdsDisponiveis = [];
  for (let colaboradorId of Object.keys(colaboradoresDia)) {
    let horarios = colaboradoresDia[colaboradorId].flat(2);
    if (horarios.includes(horaSelecionada)) {
      colaboradoresIdsDisponiveis.push(colaboradorId);
    }
  }

  const colaboradoresDisponiveis = colaboradores.filter((c) =>
    colaboradoresIdsDisponiveis.includes(c._id),
  );

  const servico = servicos.filter((s) => s._d === agendamento.servicoId)[0];

  return (
    <Modal
      offset={-500}
      open={form.modalEspecialista}
      modalDidClose={() => dispatch(updateForm({ modalEspecialista: false }))}>
      <ScrollView>
        <Box hasPadding direction="column">
          <Text bold color="dark">
            {servico?.titulo}
          </Text>
          <Text small>
            Disponíveis em{' '}
            {moment(agendamento.data).format('DD/MM/YYYY [às] HH:hh')}
          </Text>
          <Box wrap="wrap" spacing="10px 0 0">
            {colaboradoresDisponiveis.map((colaborador) => (
              <Touchable
                width={(Dimensions.get('window').width - 100) / 4}
                height="70px"
                spacing="10px 0 0 0"
                direction="column"
                align="center"
                onPress={() => {
                  dispatch(
                    updateAgendamento({ colaboradorId: colaborador._id }),
                  );
                  dispatch(updateForm({ modalEspecialista: false }));
                }}>
                <Cover
                  width="45px"
                  height="45px"
                  image={colaborador?.foto}
                  circle
                  spacing="0 0 5px 0"
                  border={
                    colaborador._id === agendamento.colaboradorId
                      ? `2px solid ${theme.colors.primary}`
                      : 'none'
                  }
                />
                <Text small bold>
                  {colaborador?.nome}
                </Text>
              </Touchable>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Modal>
  );
};

export default EspecialistasModal;
