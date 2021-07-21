import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Box, GradientView, Spacer, Text, Touchable } from '../../styles';

import theme from '../../styles/theme.json';

const ModalHeader = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
      }}>
      <GradientView
        colors={[theme.colors.dark, theme.colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Box>
          <Touchable hasPadding>
            <Icon name="chevron-left" color={theme.colors.light} size={30} />
            <View style={{ marginLeft: 20 }}>
              <Text color="light">Finalizar Agendamento</Text>
              <Spacer size="4px" />
              <Text small color="light">
                Horário, pagamento e especialista
              </Text>
            </View>
          </Touchable>
        </Box>
      </GradientView>
    </View>
  );
};

export default ModalHeader;
