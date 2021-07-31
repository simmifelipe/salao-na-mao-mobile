import React from 'react';
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

const ModalAgendamento = () => {
  return (
    <BottomSheet
      initialSnap={0}
      snapPoints={[0, 70, Dimensions.get('window').height - 30]}
      renderContent={() => (
        <>
          <ScrollView
            stickyHeaderIndices={[0]}
            style={{ backgroundColor: '#fff', height: '100%' }}>
            <ModalHeader />
            <Resume />
            <DateTimePicker />
            <EspecialistaPicker />
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
          <EspecialistasModal />
        </>
      )}
    />
  );
};

export default ModalAgendamento;
