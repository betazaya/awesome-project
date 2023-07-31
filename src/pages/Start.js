import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from "react-native";

export default function Start({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/originals/2d/95/21/2d9521daa6e04253463dd9963ff21063.jpg",
      }}
      style={styles.container}
    >
      <Image source={require("../assets/reactNative.png")} />
      <Text style={styles.text}>Login Template</Text>
      <Text
        style={{
          color: "black",
          fontSize: 13,
          textAlign: "center",
          width: "70%",
          margin: "5%",
        }}
      >
        The easiest way to start with your amazing application.
      </Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sighUpButton}
        onPress={() => {
          navigation.navigate("NewUserScreen");
        }}
      >
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>
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
    margin: 10,
    width: "90%",
  },
  sighUpButton: {
    borderRadius: 7,
    padding: 10,
    margin: 10,
    width: "90%",
    borderStyle: "solid",
    borderColor: "#8a2be2",
    borderWidth: 1,
    backgroundColor: "white",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  signUpButtonText: {
    color: "#8a2be2",
    fontSize: 16,
    textAlign: "center",
  },
});
