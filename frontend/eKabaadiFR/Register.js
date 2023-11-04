import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the desired icon library
import Vector from "./Photos/Vector.png";

const Register = () => {
  return (
    <>
      <Image
        source={require("./Photos/Front.png")}
        style={{ height: 70, width: 240, marginTop: 25, borderRadius: 50 }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Enter Your Details</Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="user" size={20} style={styles.icon1} />
            <TextInput style={styles.input1} placeholder="First Name" />
            <Icon name="user" size={20} style={styles.icon2} />
            <TextInput style={styles.input2} placeholder="Last Name" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="envelope" size={20} style={styles.icon3} />
            <TextInput style={styles.input3} placeholder="Email" />
            <Icon name="phone" size={20} style={styles.icon4} />
            <TextInput style={styles.input4} placeholder="Phone Number" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="map" size={20} style={styles.icon5} />
            <TextInput style={styles.input5} placeholder="State" />
            <Icon
              name="map-marker"
              size={20}
              color="gray"
              style={styles.icon6}
            />
            <TextInput style={styles.input6} placeholder="City" />
          </View>
        </View>
        <View>
          <Icon name="lock" size={20} style={styles.icon7} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Icon name="lock" size={20} style={styles.icon8} />
          <TextInput
            style={styles.input9}
            placeholder="confirm Password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{ height: 2, width: "40%", backgroundColor: "blue" }}
          ></View>
          <Text style={styles.instructions1}>Or Register With</Text>
          <View
            style={{ height: 2, width: "40%", backgroundColor: "blue" }}
          ></View>
        </View>
        <ImageBackground
          source={Vector}
          style={{ height: 210, width: 420, right: 20, marginTop: 25 }}
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
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 25,
    marginLeft: 14,
  },
  input: {
    width: "96%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
    marginLeft: 12,
    marginTop: 15,
    borderWidth: 1,
  },
  input9: {
    width: "96%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
    marginLeft: 12,
    marginTop: 15,
    borderWidth: 1,
  },
  input1: {
    width: "47%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
    marginLeft: 12,
    borderWidth: 1,
  },
  input2: {
    width: "47%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
    marginLeft: 9,
    borderWidth: 1,
  },
  input3: {
    width: "47%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
    marginLeft: 12,
    marginTop: 10,
    borderWidth: 1,
  },
  input4: {
    width: "47%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
    marginLeft: 9,
    marginTop: 10,
    borderWidth: 1,
  },
  input5: {
    width: "47%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
    marginLeft: 12,
    marginTop: 10,
    borderWidth: 1,
  },
  input6: {
    width: "47%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 40,
    marginLeft: 9,
    marginTop: 10,
    borderWidth: 1,
  },
  button: {
    width: "95%",
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 12,
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
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
  icon: {
    position: "absolute",
    top: 15,
    left: 10,
  },
  icon1: {
    position: "absolute",
    top: 15,
    color: "green",
    left: 22,
  },
  icon3: {
    position: "absolute",
    top: 22,
    color: "green",
    left: 21,
  },
  icon5: {
    position: "absolute",
    top: 25,
    color: "green",
    left: 21,
  },
  icon2: {
    position: "absolute",
    top: 15,
    color: "green",
    left: 215,
  },
  icon4: {
    position: "absolute",
    top: 25,
    color: "green",
    left: 217,
  },
  icon6: {
    position: "absolute",
    top: 24,
    color: "green",
    left: 215,
  },
  icon7: {
    position: "absolute",
    top: 29,
    color: "green",
    left: 22,
  },
  icon8: {
    position: "absolute",
    top: 104,
    color: "green",
    left: 24,
  },
  iconButton: {
    margin: 10,
    padding: 1,
    borderRadius: 50,
  },
  instructions1: {
    justifyContent: "flex-start",
    fontSize: 12,
    color: "black",
  },
});

export default Register;
