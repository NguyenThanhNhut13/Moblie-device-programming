import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <View style={styles.circle} />
        </View>

        <Text style={styles.tile}>GROW {"\n"} YOUR BUSINESS</Text>

        <Text style={styles.subtitle}>
          We will help you to grow your business using online server
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSignup}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.tile}>
          HOW WE WORK?
        </Text>
        
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
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70, 
    borderWidth: 15,   
    borderColor: '#000', 
  },
  tile: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 62,
    color: '#000',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    maxWidth: 350,
    marginBottom: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30
  },
  buttonLogin: {
    backgroundColor: '#ffc107', 
    padding: 15,
    borderRadius: 10,
    marginRight: 25,
    flex: 1,
  },
  buttonSignup: {
    backgroundColor: '#ffc107',
    padding: 15,
    borderRadius: 10,
    marginLeft: 25,
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  }

});
