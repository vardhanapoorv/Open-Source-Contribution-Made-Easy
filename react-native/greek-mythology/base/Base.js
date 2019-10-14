/*
 * @Author: Apoorv Vardhan 
 * @Date: 2019-10-05 14:21:09 
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-10-05 14:59:03
 */
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Card from "../card/Card";
import GreekGods from '../assets/greek-gods.json';

function Base() {
  return (
    <View>
      <View style={styles.heading}><Text>Greek Mythology</Text></View>
      <View style={styles.flexContainer}>
        {GreekGods.map((god, index) => {
          return <Card key={index} god={god} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  flexContainer: {
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row"
  }

}); 

export default Base;
