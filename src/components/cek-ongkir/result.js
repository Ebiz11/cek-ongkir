import React, { Component } from 'react';
import { View, StyleSheet, Button, ScrollView, ImageBackground } from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';

/* axios */
const axios = require('axios');
const rajaongkir = [];

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded : false
    }
  }

  componentWillMount(){
    let data = this.props.navigation.state.params.data;
    let headers = this.props.navigation.state.params.headers;

    axios.post('https://api.rajaongkir.com/starter/cost', data, headers)
    .then(function (response) {
      rajaongkir = response.data.rajaongkir;
      console.log(rajaongkir);
      this.setState({ loaded: true });
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

    if (this.state.loaded) {

      let result = [];

      if (rajaongkir.results[0].costs.length == 0) {
        result.push(<View key = "1"><Text>No Data</Text></View>)
      }else{
        for (var i = 0; i < rajaongkir.results[0].costs.length; i++) {
          result.push(
            <View key = {i}>
              <Text/>
              <Text>Service: {rajaongkir.results[0].costs[i].service}</Text>
              <Text>Description: {rajaongkir.results[0].costs[i].description}</Text>
              <Text>Rp.{rajaongkir.results[0].costs[i].cost[0].value}</Text>
              <Text>Etd: {rajaongkir.results[0].costs[i].cost[0].etd}</Text>
              <Text/>
              <Text/>
            </View>
            )
        }
      }

      return (
        <View style={{flex:1}}>
        <Header/>
          <ImageBackground
            style={{backgroundColor: 'transparent', flex:1}}
            source={require('../../assets/img/background.png')}>
            <Container>
              <Content>
                <Card>
                  <CardItem>
                    <Body>
                      <ScrollView>
                      <Text style={styles.labels}>Origin</Text>
                      <Text/>
                      <Text>City: {rajaongkir.origin_details.city_name}</Text>
                      <Text>Province: {rajaongkir.origin_details.province}</Text>
                      <Text/>
                      <Text style={styles.labels}>Destination</Text>
                      <Text/>
                      <Text>City: {rajaongkir.destination_details.city_name}</Text>
                      <Text>Province: {rajaongkir.destination_details.province}</Text>
                      <Text/>
                      <Text style={styles.labels}>Weight</Text>
                      <Text/>
                      <Text>{rajaongkir.query.weight} Gram</Text>
                      <Text/>
                      <Text style={styles.labels}>Courier</Text>
                      <Text/>
                      <Text>{rajaongkir.results[0].name}</Text>
                      <Text/>
                      <Text style={styles.labels}>Result</Text>
                      { result }
                      </ScrollView>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                  </CardItem>
               </Card>
              </Content>
            </Container>
          </ImageBackground>
        </View>
      );
    }else {
      return (
        <View style={{flex:1}}>
        <Header/>
          <ImageBackground
            style={{backgroundColor: 'transparent', flex:1, padding: 20, justifyContent: 'center',}}
            source={require('../../assets/img/background.png')}>
            <Spinner/>
          </ImageBackground>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labels: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
