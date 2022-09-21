import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/login";
import Navigation from "./Navigation/navigation";
import Main from "./Screens/main";
import CreatePost from "./Screens/createPost";
import axios from "axios";

export default function App() {
  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
