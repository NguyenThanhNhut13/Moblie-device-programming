import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {

  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.mainTitle}>CODE</Text>

        <Text style={styles.tile}>VERIFICATION</Text>

        <Text style={styles.subtitle}>
          Enter ontime password sent on{'\n'}++849092605798
        </Text>

        <View style={styles.rectangleContainer}>
          <View style={styles.rectangleItem}>

          </View>
          <View style={styles.rectangleItem}>
            
          </View>
          <View style={styles.rectangleItem}>
            
          </View>
          <View style={styles.rectangleItem}>
            
          </View>
          <View style={styles.rectangleItem}>
            
          </View>
          <View style={styles.rectangleItem}> 
            
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 62,
    color: '#000',
  },
  tile: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 22,
    color: '#000',
    height: 53
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    maxWidth: 302,
    marginBottom: 50
  },
  rectangleContainer: {
    flexDirection: 'row',
    width: 305,
    height: 45,
    borderRadius: 4,
    marginBottom: 43,
  },
  rectangleItem: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    width: 50
  },
  button: {
    width: 305,
    height: 45,
    backgroundColor: '#E3C000',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 43,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  }

});
