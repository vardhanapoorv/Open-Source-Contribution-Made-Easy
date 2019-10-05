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
          <View style={styles.card}>
              <Text>{props.god.name}</Text>
              <Text>{props.god.desc}</Text>
          </View>
      );
}

const styles = StyleSheet.create({
  card: {
    padding: 10
  }
})

export default Card;
