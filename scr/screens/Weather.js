import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import WeatherView from './WeatherView';

const Weather = () => {
  const [searchValue, setSearchValue] = useState('karachi');
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      const api_key = '9e2b52a2495a2044bf0e97bb217d81b8';
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${api_key}`;

      let res = await fetch(url);
      let data = await res.json();
      console.log(data)

      const {temp} = data.main;
      const {main: weathermood} = data.weather[0];
      const {name} = data;
      const {country} = data.sys;
        console.log(temp)
        console.log(weathermood)
        console.log(name)
        console.log(country)
      const myNewWeatherInfo = {
        temp,
        weathermood,
        name,
        country,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
    console.log(getWeatherInfo);
  }, [setSearchValue]);
  return (
    <View style={style.container}>
      <View style={style.textView}>
        <TextInput
          placeholder="Seacrh By City"
          placeholderTextColor={'grey'}
          autoFocus
          style={style.inputs}
          value={searchValue}
          autoCapitalize="none"
          onChangeText={(text) => setSearchValue(text)}></TextInput>
        <TouchableOpacity
          style={style.loginBtn}
            onPress={getWeatherInfo}
        >
          <Text style={style.btnText}>Search</Text>
        </TouchableOpacity>
        {/* <View style={style.weatherView}>
          <Text style={style.temp}>{t}&deg;</Text>
          <Text>{}</Text>
          <Text>{}</Text>
          <Text>{}</Text>
        </View> */}
        <WeatherView {...tempInfo}/>
      </View>
    </View>
  );
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#a60059',
  },
  textView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 10,
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    fontSize: 18,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#F3F5F7',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#888BF4',
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
  },
});
export default Weather;
