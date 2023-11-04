import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Vector from "./Photos/Vector.png";

const OTP = () => {
  const [name, SetName] = useState("sudhir");
  return (
    <>
      <Image
        source={require("./Photos/Front.png")}
        style={{ height: 70, width: 240, marginTop: 25, borderRadius: 50 }}
      />
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome, <Text style={styles.welcome1}>{name}</Text>{" "}
        </Text>
        <Text style={styles.instructions}>Enter OTP to login....</Text>
        <TextInput style={styles.input} placeholder="+917666675306" />
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.buttonText1}>Change Phone Number</Text>
        </TouchableOpacity>
        <View style={styles.otpContainer}>
          <TextInput style={styles.otpInput} placeholder="8" />
          <TextInput style={styles.otpInput} placeholder="8" />
          <TextInput style={styles.otpInput} placeholder="8" />
          <TextInput style={styles.otpInput} placeholder="8" />
        </View>
        <Text style={styles.error}>Please enter valid OTP</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.buttonText}>Reset OTP</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ height: 2, width: "40%", backgroundColor: "blue" }}
          ></View>
          <Text style={styles.instructions1}>Or Sign up With</Text>
          <View
            style={{ height: 2, width: "40%", backgroundColor: "blue" }}
          ></View>
        </View>

        <ImageBackground
          source={Vector}
          style={{ height: 210, width: 420, right: 20, marginTop: 58 }}
        >
          <View style={styles.socialIcons}>
            <View style={styles.social}>
              <TouchableOpacity style={styles.iconButton}>
                <Image
                  source={require("./Photos/Google.png")}
                  style={{ height: 40, width: 40, borderRadius: 50 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.social1}>
              <TouchableOpacity style={styles.iconButton}>
                <Image
                  source={require("./Photos/facebook.png")}
                  style={{ height: 40, width: 40, borderRadius: 50 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    width: "100%",
    padding: 10,
    marginTop: 30,
    marginLeft: 10,
  },
  welcome1: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    width: "100%",
    padding: 10,
  },
  instructions: {
    justifyContent: "flex-start",
    fontSize: 20,
    color: "black",
    marginTop: 50,
    marginBottom: 14,
    left: 24,
  },
  input: {
    width: "90%",
    height: 40,
    marginLeft: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    height: 40,
    marginBottom: 10,
    marginLeft: 20,
  },
  otpInput: {
    width: "22%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
  error: {
    fontSize: 16,
    color: "red",
    marginBottom: 10,
    marginLeft: 22,
    marginTop: 19,
  },
  loginButton: {
    width: "90%",
    height: 40,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 14,
    marginLeft: 20,
  },
  resetButton: {
    width: "80%",
    height: 40,
    marginLeft: 280,
    borderRadius: 5,
    marginBottom: 10,
  },
  changeButton: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 200,
  },
  buttonText: {
    color: "black",
    fontSize: 14,
  },
  buttonText1: {
    color: "black",
    fontSize: 14,
    marginLeft: 18,
  },
  instructions1: {
    justifyContent: "flex-start",
    fontSize: 15,
    color: "black",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    left: 14,
  },
  social: {
    backgroundColor: "lightgrey",
    borderRadius: 50,
    marginTop: 10,
  },
  social1: {
    backgroundColor: "lightgrey",
    borderRadius: 100,
    marginLeft: 28,
    marginTop: 10,
  },
  iconButton: {
    margin: 10,
    padding: 1,
    borderRadius: 50,
  },
});

export default OTP;
