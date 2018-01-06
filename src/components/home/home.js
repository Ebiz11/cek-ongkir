import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Thumbnail } from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <Thumbnail square  large source={{uri: 'https://utekno.com/wp-content/uploads/2015/11/logo-tiki.png'}} />
      <Thumbnail large source={{uri: 'https://i.pinimg.com/originals/8d/3b/f8/8d3bf8fda0c800bde077815241705bf3.png'}} />
      <Thumbnail large source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Pos_Indonesia_logo.svg/1280px-Pos_Indonesia_logo.svg.png'}} />
        <Text/><Text/>
        <Button
          onPress={() => navigate('CekOngkir')}
          title="Cek Ongkir"
        />
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
    backgroundColor: '#fff'
  },
});
