import React, { Component, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import BackButton from "../Helper/BackButton";
import axios from "axios";

const CreatePost = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const count = 9;

  async function putPost(title, description, count) {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        id: count,
        title: title,
        userId: 1,
        description: description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    count++;
  }
  return (
    <SafeAreaView style={styles.container}>
      <BackButton goBack={() => navigation.goBack()} />

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 30 }}>Title</Text>

        <TextInput
          style={styles.input}
          placeholder="enter title"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 30 }}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="enter description"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
      </View>

      <Button
        title="Create"
        color="red"
        onPress={() => putPost(title, description, count)}
      />
    </SafeAreaView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 10,
    backgroundColor: "grey",
    shadowColor: "black",
    shadowOpacity: 4,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    borderRadius: 20,
    width: 300,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    height: 140,
    width: 250,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});
