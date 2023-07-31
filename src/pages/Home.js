import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/originals/2d/95/21/2d9521daa6e04253463dd9963ff21063.jpg",
      }}
      style={styles.container}
    >
      <Image source={require("../assets/reactNative.png")} />
      <Text style={styles.text}>Let's start</Text>
      <Text
        style={{
          color: "black",
          fontSize: 17,
          textAlign: "center",
          width: "70%",
          color: "gray",
        }}
      >
        Your amazing app start here. Open you favourite code editor and start
        editing this project.
      </Text>
      <TouchableOpacity
        style={styles.sighOutButton}
        onPress={() => {
          navigation.navigate("Start");
        }}
      >
        <Text style={styles.signOutButtonText}>Log out</Text>
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
    margin: 17,
    marginTop: 30,
    width: "90%",
  },
  sighOutButton: {
    borderRadius: 7,
    padding: 10,
    margin: 10,
    marginTop: 30,
    width: "90%",
    borderStyle: "solid",
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
  },
  signOutButtonText: {
    color: "#8a2be2",
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
