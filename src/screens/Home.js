import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Estas en Home</Text>
      <View style = {styles.container}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Stack')}> Ir al stack
        </TouchableOpacity>
      </View>     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',  
    padding: 10,
  }
});

