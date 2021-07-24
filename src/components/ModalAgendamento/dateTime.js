import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Box, Cover, Spacer, Text, Title, Touchable } from '../../styles';
import util from '../../util';
import theme from '../../styles/theme.json';

const DateTime = () => {
  return (
    <>
      <Text bold color="dark" hasPadding>
        Para quando você quer agendar?
      </Text>
      <FlatList
        data={['a', 'b', 'c', 'e', 'f', 'g', 'h', 'i']}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        renderItem={({ item }) => (
          <Touchable
            width="70px"
            height="80px"
            spacing="0 10px 0 0"
            rounded="10px"
            direction="column"
            align="center"
            justify="center"
            border={`1px solid ${
              item === 'a'
                ? theme.colors.primary
                : util.toAlpha(theme.colors.muted, 20)
            }`}
            background={item === 'a' ? 'primary' : 'light'}>
            <Text small color={item === 'a' ? 'light' : undefined}>
              Dom
            </Text>
            <Title small color={item === 'a' ? 'light' : undefined}>
              19
            </Title>
            <Text small color={item === 'a' ? 'light' : undefined}>
              Abril
            </Text>
          </Touchable>
        )}
      />

      <Text bold color="dark" hasPadding>
        Que horas?
      </Text>
      <FlatList
        data={[
          ['10:00', '10:30'],
          ['11:00', '11:30'],
          ['12:00', '12:30'],
          ['13:00', '13:30'],
          ['14:00', '14:30'],
          ['15:00', '15:30'],
          ['16:00', '16:30'],
          ['17:00', '17:30'],
        ]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item[0]}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        renderItem={({ item }) => (
          <Box direction="column" spacing="0 10px 0 0">
            {item.map((horario) => (
              <Touchable
                key={horario}
                width="100px"
                height="35px"
                spacing="0 0 5px 0"
                background={horario === '11:00' ? 'primary' : 'light'}
                rounded="7px"
                direction="column"
                align="center"
                justify="center"
                border={`1px solid ${
                  horario === '11:00'
                    ? theme.colors.primary
                    : util.toAlpha(theme.colors.muted, 20)
                }`}>
                <Text small color={horario === '11:00' ? 'light' : undefined}>
                  {horario}
                </Text>
              </Touchable>
            ))}
          </Box>
        )}
      />
    </>
  );
};

export default DateTime;
