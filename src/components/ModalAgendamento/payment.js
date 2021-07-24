import React from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Box, Text, Touchable } from '../../styles';

import util from '../../util';
import theme from '../../styles/theme.json';

const PaymentPicker = () => {
  return (
    <>
      <Text bold hasPadding color="dark">
        Como você gostaria de pagar?
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Touchable
          height="30px"
          rounded="5px"
          background={util.toAlpha(theme.colors.muted, 5)}
          border={`0.5px solid ${util.toAlpha(theme.colors.muted, 40)}`}
          align="center"
          hasPadding
          justify="space-between">
          <Box>
            <Image
              source={{
                uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Visa-Logo-2006%E2%80%932014.jpg',
              }}
              style={{
                width: 20,
                height: 10,
                marginRight: 10,
              }}
            />
            <Text small>4252 **** **** **** 0981</Text>
          </Box>
          <Icon name="cog-outline" color={theme.colors.muted} size={20} />
        </Touchable>
      </View>
    </>
  );
};

export default PaymentPicker;
