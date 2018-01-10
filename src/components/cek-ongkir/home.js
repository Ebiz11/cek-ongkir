import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Thumbnail } from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { navigate } = this.props.navigation;

    return (

      <View style={{flex:1}}>
        <ImageBackground
          style={styles.container}
          source={require('../../assets/img/background.png')}>
          <Button
            onPress={() => navigate('CekOngkir')}
            title="Cek Ongkir"
          />
        </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'transparent'
  },
});
