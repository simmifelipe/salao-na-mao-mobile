import React from 'react';
import {
  Badge,
  Cover,
  GradientView,
  Text,
  Title,
  Touchable,
  Box,
} from '../../styles';

// import { Container } from './styles';

const Header = () => {
  return (
    <>
      <Cover
        width="100%"
        height="300px"
        image="https://i1.wp.com/www.belasis.com.br/wp-content/uploads/2020/12/como-montar-um-salao-de-beleza.jpg">
        <GradientView
          colors={['#21232f33', '#21232fe6']}
          hasPadding
          justify="flex-end">
          <Badge color="success">ABERTO</Badge>

          <Title color="light">Salão teste</Title>

          <Text color="light" small>
            Salvador do Sul • 5.2kms
          </Text>
        </GradientView>
      </Cover>
      <Box background="light" align="center">
        <Box hasPadding>
          <Touchable>
            <Text small spacing="10px 0 0">
              Ligar
            </Text>
          </Touchable>
        </Box>
        <Box />
      </Box>
    </>
  );
};

export default Header;
