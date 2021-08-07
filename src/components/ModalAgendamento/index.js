import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';

import ModalHeader from './header';
import Resume from './resume';
import DateTimePicker from './dateTime';
import EspecialistaPicker from './Especialistas';
import EspecialistasModal from './Especialistas/modal';
import PaymentPicker from './payment';

import { saveAgendamento } from '../../store/modules/salao/actions';
import { Box, Button, Text, Title, Touchable } from '../../styles';
import util from '../../util';
import theme from '../../styles/theme.json';
import moment from 'moment';

const ModalAgendamento = () => {
  const { form, agendamento, servicos, agenda, colaboradores } = useSelector(
    (state) => state.salao,
  );
  const dispatch = useDispatch();
  const sheetRef = useRef(null);

  const dataSelecionada = moment(agendamento.data).format('YYYY-MM-DD');
  const horaSelecionada = moment(agendamento.data).format('HH:mm');
  const { horariosDisponiveis, colaboradoresDia } = util.selectAgendamento(
    agenda,
    dataSelecionada,
    agendamento.colaboradorId,
  );

  const servico = servicos.filter((s) => s._id === agendamento.servicoId)[0];

  const setSnap = (snapIndex) => {
    sheetRef.current.snapTo(snapIndex);
  };

  useEffect(() => {
    if (form.modalAgendamento) {
      setSnap(form.modalAgendamento);
    }
  }, [form.modalAgendamento]);

  return (
    <BottomSheet
      ref={sheetRef}
      initialSnap={0}
      snapPoints={[0, 70, Dimensions.get('window').height - 30]}
      renderContent={() => (
        <>
          <ScrollView
            stickyHeaderIndices={[0]}
            style={{ backgroundColor: '#fff', height: '100%' }}>
            <ModalHeader />
            <Resume servico={servico} />
            {agenda.length > 0 && (
              <>
                <DateTimePicker
                  servico={servico}
                  agenda={agenda}
                  dataSelecionada={dataSelecionada}
                  horaSelecionada={horaSelecionada}
                  horariosDisponiveis={horariosDisponiveis}
                />
                <EspecialistaPicker
                  colaboradores={colaboradores}
                  agendamento={agendamento}
                />
                <PaymentPicker />

                <Box hasPadding>
                  <Touchable
                    onPress={() => {
                      dispatch(saveAgendamento());
                    }}>
                    <Button
                      loading={form.agendamentoLoading}
                      disabled={form.agendamentoLoading}
                      icon="check"
                      background="primary"
                      mode="contained"
                      block
                      uppercase="false">
                      Confirmar meu agendamento
                    </Button>
                  </Touchable>
                </Box>
              </>
            )}

            {agenda.length === 0 && (
              <Box
                height={Dimensions.get('window').height - 200}
                background="light"
                direction="column"
                hasPadding
                justify="center"
                align="center">
                <ActivityIndicator size="large" color={theme.colors.primary} />
                <Title align="center">Só um instante...</Title>
                <Text small align="center">
                  Estamos buscando o melhor horário par você...
                </Text>
              </Box>
            )}
          </ScrollView>
          <EspecialistasModal
            form={form}
            colaboradores={colaboradores}
            agendamento={agendamento}
            servicos={servicos}
            horaSelecionada={horaSelecionada}
            colaboradoresDia={colaboradoresDia}
          />
        </>
      )}
    />
  );
};

export default ModalAgendamento;
