import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Base from './base/Base';

export default function App() {
  return (
    <View style={styles.container}>
      <Base />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
