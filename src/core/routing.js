import React from 'react';
import Home from '../components/home/home';
import CekOngkir from '../components/cek-ongkir/cek-ongkir';
import Result from '../components/cek-ongkir/result';

const ResultScreen = ({navigation}) => (
    <Result navigation = {navigation}/>
);

const CekOngkirScreen = ({navigation}) => (
    <CekOngkir navigation = {navigation}/>
);

const HomeScreen = ({navigation}) => (
    <Home navigation = {navigation}/>
);

const Route = {
  Index : {
    screen: HomeScreen,
  },

  Home: {
    screen: HomeScreen
  },

  CekOngkir: {
    screen: CekOngkirScreen,
    navigationOptions: {
      headerTitle: 'Cek Ongkir',
    },
  },

  Result: {
    screen: ResultScreen,
    navigationOptions: {
      headerTitle: 'Result',
    },
  },
}

export default Route;
