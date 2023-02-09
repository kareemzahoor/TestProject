import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const WeatherView = ({temp, weathermood, name, country}) => {
  return (
    <View style={style.weatherView}>
      <Text style={style.temp}>{temp}&deg;</Text>
      <Text style={style.mood}>{weathermood}</Text>
      <View style={style.nameView}>
      <Text style={style.name}>{name},</Text>
      <Text style={style.name}>{country}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  weatherView: {
    flex: 0.7,
    justifyContent:"center",
    alignItems:"center",
  },
  temp: {
    fontSize: 40,
  },
  mood:{
    fontSize:28
  },
  nameView:{
    marginTop:10,
    flexDirection:"row",
  },
  name:{
    fontSize:20
  }
});

export default WeatherView;
