import React, { Component } from "react";
import { text, Button, TouchableOpacity, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AccountInfo from "../Screens/accountInfo";
import Main from "../Screens/main";
import Preview from "../Screens/preview";
import Login from "../Screens/login";
import CreatePost from "../Screens/createPost";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="main"
          component={Main}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerRight: () => (
              // <Button
              //   onPress={() => alert("This is a button!")}
              //   title="Info"
              //   color="black"
              // />
              <TouchableOpacity
                onPress={() => navigation.navigate("createPost")}
              >
                <Ionicons name="add" size={20} color="black" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              // <Button
              //   onPress={() => alert("This is a button!")}
              //   title="Info"
              //   color="black"
              // />
              <TouchableOpacity
                onPress={() => navigation.navigate("accountInfo")}
              >
                <Image
                  source={require("../assets/default_profile.webp")}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="createPost"
          component={CreatePost}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="preview"
          component={Preview}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="accountInfo"
          component={AccountInfo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
