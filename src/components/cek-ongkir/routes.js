import React from 'react';
import Home from './home';
import CekOngkir from './cek-ongkir';
import Result from './result';

const ResultScreen = ({navigation}) => (
    <Result navigation = {navigation}/>
);

const CekOngkirScreen = ({navigation}) => (
    <CekOngkir navigation = {navigation}/>
);

const HomeScreen = ({navigation}) => (
    <Home navigation = {navigation}/>
);

const Routes = {
  Index : {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },

  CekOngkir: {
    screen: CekOngkirScreen,
    navigationOptions: {
      headerTitle: 'Cek Ongkir',
      headerStyle: {
        marginTop: 24
      },
    },
  },

  Result: {
    screen: ResultScreen,
    navigationOptions: {
      headerTitle: 'Result',
      headerStyle: {
        marginTop: 24
      },
    },
  },
}

export default Routes;
