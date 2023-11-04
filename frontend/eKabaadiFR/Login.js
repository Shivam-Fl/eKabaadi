import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import Vector from "./Photos/Vector.png";
export default function Login() {
  return (
    <>
      <ScrollView>
        <Image
          source={require("./Photos/Front.png")}
          style={{ height: 70, width: 240, marginTop: 35, borderRadius: 50 }}
        />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./Photos/Trash.jpg")}
              style={{
                height: 260,
                width: 250,
                marginLeft: 60,
                marginBottom: 10,
                marginTop: 80,
              }}
            />
          </View>
          <Text style={styles.tt}>Login Details</Text>
          <TextInput style={styles.input} placeholder="Phone Number" />

          <TouchableOpacity style={styles.button1} onPress={() => {}}>
            <Text style={styles.buttonText}>Let's Start</Text>
          </TouchableOpacity>

          <ImageBackground
            source={Vector}
            style={{ height: 260, width: 420, right: 40 }}
          >
            <Text style={{ left: 190 }}>or Sign up with </Text>
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
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    marginBottom: 70,
  },
  imageContainer: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    width: 360,

    padding: 17,
  },
  tt: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 90,
  },

  button1: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "darkgreen",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
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
