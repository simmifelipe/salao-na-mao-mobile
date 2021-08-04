import React from 'react';
import { Box, Cover, Spacer, Text, Title } from '../../styles';
import util from '../../util';
import consts from '../../consts';
import theme from '../../styles/theme.json';

const Resume = ({ servico }) => {
  return (
    <Box
      align="center"
      hasPadding
      background={util.toAlpha(theme.colors.muted, 5)}>
      <Cover
        width="80px"
        height="80px"
        image={`${consts.bucketUrl}/${servico?.arquivos[0]?.caminho}`}
      />
      <Box direction="column">
        <Title small>{servico?.titulo}</Title>
        <Spacer size="4px" />
        <Text small>Total: R$ {servico?.preco}</Text>
      </Box>
    </Box>
  );
};

export default Resume;
