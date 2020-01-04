import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return <View style = {styles.container}>
        <Text style={styles.text}>Getting weather</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFED9',
      justifyContent: "flex-end",
      paddingHorizontal: 30,
      paddingVertical: 100
    },
    text: {
      color: "#2c2c2c",
      fontSize: 30
    },
  });
  