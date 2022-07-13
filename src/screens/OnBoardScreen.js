import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";

const OnBoardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar transulucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/onboardImage.jpg")}
      >
        <View style={style.details}>
          <Text
            style={{ color: COLORS.white, fontSize: 35, fontWeight: "bold" }}
          >
           
            Discover
          </Text>
          <Text
            style={{ color: COLORS.white, fontSize: 35, fontWeight: "bold" }}
          >
         
            world with us
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }}>Get Started </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const style = StyleSheet.create({
  details: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 15,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
  },
});

export default OnBoardScreen;
