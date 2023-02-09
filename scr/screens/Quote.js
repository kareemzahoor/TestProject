import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Quote = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const response = {
    //   method: 'GET',
    //   url: 'https://type.fit/api/quotes/',
    // };
    // axios.request(response)
    //   .then(response => {
    //     // console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // setData(response.data);
    getQuotes();
  }, []);

  const getQuotes = async () => {
    const response = await fetch('https://type.fit/api/quotes/');
    const result = await response.json();
    setData(result);
    // console.log(result);
  };
  console.log(data)
  return (
    <View style={style.container}>
      <View style={style.listView}>
        <View style={style.container}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={style.quoteView}>
                  <Text style={style.item}>{item.text}</Text>
                  <Text style={style.author}>~{item.author}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
  },
  quoteView: {
    width: '90%',
    // height: 100,
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 20,
    alignSelf: 'center',
    // backgroundColor:"blue"
  },
  item: {
    // textAlign:"center",
    padding: 10,
    fontSize: 22,
  },
  author:{
    textAlign:"right",
    padding:10,
    fontSize:18,
    fontWeight:700
  }

});

export default Quote;
