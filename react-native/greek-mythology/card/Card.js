/*
 * @Author: Apoorv Vardhan 
 * @Date: 2019-10-05 14:21:22 
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-10-05 15:00:31
 */

import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function Card(props) {
  return (
          <View style={[styles.card, styles.border]}>
              <Text style = {styles.godHeading}>{props.god.name}</Text>
              <Text>{props.god.desc}</Text>
          </View>
      );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#c5e5ed',
    width: 300,
    height: 250,
    flexGrow: 1 
  },
  border:{
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black',
  },
  godHeading:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 6
  }
})

export default Card;
