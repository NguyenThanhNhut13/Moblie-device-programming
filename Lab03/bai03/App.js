import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    console.log('Next pressed with email:', email);
  };

  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.lockContainer}>
          <Image source={{uri: 'https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/lock-icon.png'}} style={styles.lock} />
        </View>

        <Text style={styles.tile}>FORRGET{"\n"}PASSWORD</Text>

        <Text style={styles.subtitle}>
        Provide your account’s email for which you want to reset your password
        </Text>

        <View style={styles.inputContainer}>
          <Image source={{uri: 'https://www.hsbc.com.uy/uruguay/internetpub.nsf/AttachmentsByTitle/ico_sobre/$FILE/ico_sobre.png'}} style={{width: 48, height: 45, marginLeft: 5, marginRight: -10}} />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#000'
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>NEXT</Text>
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
  lockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 37,
  },
  lock: {
    width: 100,
    height: 125,
    borderRadius: 20, 
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
    maxWidth: 302,
    marginBottom: 50
  },
  inputContainer: {
    flexDirection: 'row',
    width: 305,
    height: 45,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginBottom: 43,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
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
