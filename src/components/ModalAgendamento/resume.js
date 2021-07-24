import React from 'react';
import { Box, Cover, Spacer, Text, Title } from '../../styles';
import util from '../../util';
import theme from '../../styles/theme.json';

const Resume = () => {
  return (
    <Box
      align="center"
      hasPadding
      background={util.toAlpha(theme.colors.muted, 5)}>
      <Cover
        width="80px"
        height="80px"
        image="https://reyne.info/images5/0420/tendencia-de-corte-cabelo-2020/tendencia-de-corte-cabelo-2020-59.jpg"
      />
      <Box direction="column">
        <Title small>Corte de cabelo feminino</Title>
        <Spacer size="4px" />
        <Text small>Total: R$ 45.00</Text>
      </Box>
    </Box>
  );
};

export default Resume;
