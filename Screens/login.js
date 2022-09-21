import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Keyboard,
  Button,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import Logo from "../Helper/Logo";
import BackButton from "../Helper/BackButton";

const tempEmail = "123@gmail.com";
const tempPassword = "12345";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onLoginPressed() {
    console.log(email, password);
    if (email == tempEmail && password == tempPassword) {
      console.log("success");
      navigation.navigate("main");
    }
    return;
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <BackButton goBack={() => navigation.goBack()} />
      <Logo />
      <Text style={{ fontSize: 30 }}>Login!</Text>
      <TextInput
        style={styles.input}
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button
        onPress={onLoginPressed}
        title="LOGIN"
        style={{ backgroundColor: "#198ace" }}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: "#198ace",
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});
