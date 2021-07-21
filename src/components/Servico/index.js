import React from 'react';
import { Box, Button, Cover, Text, Touchable } from '../../styles';

const Servico = () => {
  return (
    <Touchable hasPadding background="light" height="100px" align="center">
      <Cover image="https://i.pinimg.com/736x/4b/7a/8c/4b7a8c26765c37dc3d7ef339f015e34c.jpg" />

      <Box direction="column">
        <Text bold color="dark">
          Corte de cabelo feminino
        </Text>
        <Text small>R$ 45 • 30 min</Text>
      </Box>

      <Box>
        <Button
          icon="clock-check-outline"
          background="success"
          mode="contained">
          Agendar
        </Button>
      </Box>
    </Touchable>
  );
};

export default Servico;
