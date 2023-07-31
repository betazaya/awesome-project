import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/originals/2d/95/21/2d9521daa6e04253463dd9963ff21063.jpg",
      }}
      style={styles.container}
    >
      <Image source={require("../assets/reactNative.png")} />
      <Text style={styles.text}>Welcome back</Text>
      <TextInput style={styles.input} placeholder="Email"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RecoverScreen");
        }}
      >
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "gray" }}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewUserScreen");
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#8a2be2" }}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10%",
  },
  text: {
    fontSize: 30,
    color: "#8a2be2",
    margin: 5,
  },
  loginButton: {
    borderRadius: 7,
    backgroundColor: "#8a2be2",
    padding: 10,
    margin: 17,
    marginTop: 30,
    width: "90%",
  },
  input: {
    borderRadius: 7,
    backgroundColor: "white",
    padding: 14,
    margin: 10,
    width: "90%",
    borderColor: "gray",
    borderWidth: 2,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  forgot: {
    color: "gray",
    paddingLeft: 130,
    fontSize: 14,
    textAlign: "left",
  },
});
