import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render(){

    return (
      <View style={styles.container}>
        <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
        <Text style={{fontWeight:"bold", fontSize:18}}>Welcome Home</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
