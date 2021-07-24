import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-simple-modal';

import { Box, Cover, Text, Touchable } from '../../../styles';
import theme from '../../../styles/theme.json';

const EspecialistasModal = () => {
  return (
    <Modal open={false}>
      <ScrollView>
        <Box hasPadding direction="column">
          <Text bold color="dark">
            Corte de cabelo feminino
          </Text>
          <Text small>Disponíveis em 23/07/2021 (Dom) às 11:30</Text>
          <Box wrap="wrap" spacing="10px 0 0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((colaborador) => (
              <Touchable
                width={(Dimensions.get('window').width - 100) / 4}
                height="70px"
                spacing="10px 0 0 0"
                direction="column"
                align="center">
                <Cover
                  width="45px"
                  height="45px"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciiL00Bb5_2vKcIWNX6m94D4WTm3a0-dMjw&usqp=CAU"
                  circle
                  spacing="0 0 5px 0"
                  border={
                    colaborador === 1
                      ? `2px solid ${theme.colors.primary}`
                      : 'none'
                  }
                />
                <Text small bold>
                  Juliana
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
