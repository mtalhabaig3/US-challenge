import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import BackButton from "../Helper/BackButton";

const AccountInfo = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.userInfoSection,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <View style={{ marginTop: 15 }}>
            <Image
              style={styles.image}
              source={require("../assets/default_profile.webp")}
            />
            <View style={{ marginLeft: 20 }}>
              <Text
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                Name
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              color="black"
              size={20}
            />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Tokyo, Japan
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="phone" color="black" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              +92-1234567890
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="email" color="black" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>email</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log("Log out!")}
        >
          <Text style={styles.btnTxt}>Log Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <BackButton goBack={() => navigation.goBack()} />
    </>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  btn: {
    height: 50,
    width: 270,
    backgroundColor: "black",
    borderRadius: 80,
    marginLeft: 65,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 250,
  },
  btnTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  image: { width: 100, height: 100, borderRadius: 50 },
});
