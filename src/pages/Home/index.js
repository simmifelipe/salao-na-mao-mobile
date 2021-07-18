import React from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';

// import { Container } from './styles';

const Home = () => {
  return <FlatList ListEmptyComponent={Header} data={[]} />;
};

export default Home;
