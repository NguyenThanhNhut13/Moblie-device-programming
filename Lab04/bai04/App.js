import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
  SafeAreaView
} from "react-native";

export default function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState("");
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    let charset = "";
    if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let password = "";
    for (let i = 0; i < parseInt(passwordLength); i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <View style={{backgroundColor:"rgb(21, 21, 55)"}}>
      <Text style={[styles.generatedPassword,{display:"flex",justifyContent:"center",}]}>{generatedPassword}</Text>
      </View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}>
        <Text style={{ marginTop:17 }}>Password length</Text>
        <TextInput
          style={styles.input}
          placeholder="Password length"
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={setPasswordLength}
        />
      </View>

      <View style={styles.option}>
        <Text>Include lower case letters</Text>
        <Switch value={includeLower} onValueChange={setIncludeLower} />
      </View>

      <View style={styles.option}>
        <Text>Include uppercase letters</Text>
        <Switch value={includeUpper} onValueChange={setIncludeUpper} />
      </View>

      <View style={styles.option}>
        <Text>Include number</Text>
        <Switch value={includeNumbers} onValueChange={setIncludeNumbers} />
      </View>

      <View style={styles.option}>
        <Text>Include special symbol</Text>
        <Switch value={includeSymbols} onValueChange={setIncludeSymbols} />
      </View>

      <Button style={{width:10}} title="GENERATE PASSWORD" onPress={generatePassword} />

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "rgb(34, 35, 91)", // Dark blue background
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  input: {
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: "white",
    marginBottom: 20,
    width: "50%",
    height: 40,
    marginTop: 10
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  generatedPassword: {
    marginTop: 20,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
