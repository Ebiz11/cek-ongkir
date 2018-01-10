import React from 'react';
import { Button, Platform, ScrollView, View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CekOngkir from '../components/cek-ongkir/setup';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text></Text><Text></Text><Text></Text><Text></Text>
      <Text style={styles.banner}>Welcome to Dashboard</Text>
      <Text></Text>
      <Text style={styles.banner}>{banner}</Text>
    </SafeAreaView>
  </ScrollView>
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};

const CekOngkirScreen = ({ navigation }) => (
  <CekOngkir/>
);

CekOngkirScreen.navigationOptions = {
  drawerLabel: 'Cek Ongkir',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="search" size={24} style={{ color: tintColor }} />
  ),
};

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen,
    },
    CekOngkir: {
      path: '/sent',
      screen: CekOngkirScreen,
    },
  }
);

export default DrawerExample;

const styles = StyleSheet.create({
    banner:{
      textAlign: 'center'
    }

});
