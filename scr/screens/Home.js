import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <TouchableOpacity
          style={style.loginBtn}
          onPress={() => navigation.navigate('Quote')}>
          <Text style={style.btnText}>Quote Api</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.loginBtn}
          onPress={() => navigation.navigate('Weather')}>
          <Text style={style.btnText}>Weather Api</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    margin: 20,
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

export default Home;
