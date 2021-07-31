import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import util from '../../util';
import theme from '../../styles/theme.json';
import Servico from '../../components/Servico';
import ModalAgendamento from '../../components/ModalAgendamento';
import { useDispatch, useSelector } from 'react-redux';
import { allServicos, getSalao } from '../../store/modules/salao/actions';

const Home = () => {
  const dispatch = useDispatch();

  const { servicos, form } = useSelector((state) => state.salao);

  const finalServicos =
    form.inputFiltro.length > 0
      ? servicos.filter((s) => {
        const titulo = s.titulo.toLowerCase().trim();
        const arraySearch = form.inputFiltro.toLowerCase().trim().split(' ');

        return arraySearch.every((w) => titulo.search(w) !== -1);
      })
      : servicos;

  useEffect(() => {
    dispatch(getSalao());
    dispatch(allServicos());
  }, [dispatch]);

  return (
    <>
      <FlatList
        ListHeaderComponent={Header}
        data={finalServicos}
        style={{
          backgroundColor: util.toAlpha(theme.colors.muted, 10),
        }}
        renderItem={({ item }) => <Servico servico={item} />}
        keyExtractor={(item) => String(item._id)}
      />

      <ModalAgendamento />
    </>
  );
};

export default Home;
