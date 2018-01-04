import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Welcome to Ebiz App</Text>
        <Text></Text>
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
    padding: 20
  },
});
