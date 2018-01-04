import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';

const result = [];
export default class Result extends Component {
  constructor(props) {
    super(props);
  }

  dataResult(){
    console.log(this.props.navigation.state.params.rajaongkir);
    result = [];

    for (var i = 0; i < this.props.navigation.state.params.rajaongkir.results[0].costs.length; i++) {
      result.push(
        <View key = {i}>
          <Text/>
          <Text>Service: {this.props.navigation.state.params.rajaongkir.results[0].costs[i].service}</Text>
          <Text>Description: {this.props.navigation.state.params.rajaongkir.results[0].costs[i].description}</Text>
          <Text>Rp.{this.props.navigation.state.params.rajaongkir.results[0].costs[i].cost[0].value}</Text>
          <Text>Etd: {this.props.navigation.state.params.rajaongkir.results[0].costs[i].cost[0].etd}</Text>
          <Text/>
          <Text/>
        </View>
        )
    }

    if (result.length == 0) {
        return(
          <View>
            <Text> No Data </Text>
          </View>
        )
    }else {

      return(
        <View>
          {result}
        </View>
      )
    }

  }

  render() {

    return (
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.labels}>Origin</Text>
      <Text/>
      <Text>City: {this.props.navigation.state.params.rajaongkir.origin_details.city_name}</Text>
      <Text>Province: {this.props.navigation.state.params.rajaongkir.origin_details.province}</Text>
      <Text/>
      <Text style={styles.labels}>Destination</Text>
      <Text/>
      <Text>City: {this.props.navigation.state.params.rajaongkir.destination_details.city_name}</Text>
      <Text>Province: {this.props.navigation.state.params.rajaongkir.destination_details.province}</Text>
      <Text/>
      <Text style={styles.labels}>Weight</Text>
      <Text/>
      <Text>{this.props.navigation.state.params.rajaongkir.query.weight} Gram</Text>
      <Text/>
      <Text style={styles.labels}>Courier</Text>
      <Text/>
      <Text>{this.props.navigation.state.params.rajaongkir.results[0].name}</Text>
      <Text/>
      <Text style={styles.labels}>Result:</Text>

        {this.dataResult()}
      </View>
      </ScrollView>
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
  labels: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
