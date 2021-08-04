import React, { useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';

import ModalHeader from './header';
import Resume from './resume';
import DateTimePicker from './dateTime';
import EspecialistaPicker from './Especialistas';
import EspecialistasModal from './Especialistas/modal';
import PaymentPicker from './payment';

import { Box, Button } from '../../styles';
import { useSelector } from 'react-redux';
import util from '../../util';
import moment from 'moment';

const ModalAgendamento = () => {
  const { form, agendamento, servicos, agenda, colaboradores } = useSelector(
    (state) => state.salao,
  );
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
              <Button
                icon="check"
                background="primary"
                mode="contained"
                block
                uppercase="false">
                Confirmar meu agendamento
              </Button>
            </Box>
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
