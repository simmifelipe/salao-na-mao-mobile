import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';
import ModalHeader from './header';

const ModalAgendamento = () => {
  return (
    <BottomSheet
      initialSnap={2}
      snapPoints={[0, 70, Dimensions.get('window').height - 30]}
      renderContent={() => (
        <ScrollView style={{ backgroundColor: '#fff', height: '100%' }}>
          <ModalHeader />
        </ScrollView>
      )}
    />
  );
};

export default ModalAgendamento;
