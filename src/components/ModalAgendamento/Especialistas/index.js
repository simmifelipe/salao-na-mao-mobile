import React from 'react';
import { Box, Button, Cover, Text } from '../../../styles';
import theme from '../../../styles/theme.json';

const EspecialistaPicker = () => {
  return (
    <>
      <Text bold hasPadding removePaddingBottom color="dark">
        Gostaria de trocar o(a) especialista?
      </Text>
      <Box hasPadding removePaddingBottom>
        <Box align="center">
          <Cover
            width="45px"
            height="45px"
            circle
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciiL00Bb5_2vKcIWNX6m94D4WTm3a0-dMjw&usqp=CAU"
          />
          <Text small>Juliana Righi</Text>
        </Box>
        <Box>
          <Button
            uppercase={false}
            textColor="muted"
            background={theme.colors.light}
            block
            mode="contained">
            Trocar Especialista
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EspecialistaPicker;
