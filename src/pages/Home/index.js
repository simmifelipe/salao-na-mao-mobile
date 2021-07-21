import React from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import util from '../../util';
import theme from '../../styles/theme.json';
import Servico from '../../components/Servico';
import ModalAgendamento from '../../components/ModalAgendamento';

const Home = () => {
  return (
    <>
      <FlatList
        ListHeaderComponent={Header}
        data={['a', 'b', 'c', 'd']}
        style={{ backgroundColor: util.toAlpha(theme.colors.muted, 10) }}
        renderItem={({ item }) => <Servico />}
        keyExtractor={(item) => item}
      />

      <ModalAgendamento />
    </>
  );
};

export default Home;
