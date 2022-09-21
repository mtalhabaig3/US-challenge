import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import BackButton from "../Helper/BackButton";

const Preview = ({ route, navigation }) => {
  const post = route.params.post;
  return (
    <SafeAreaView style={styles.container}>
      <BackButton goBack={() => navigation.goBack()} />

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 30 }}>Title</Text>
        <View style={styles.card}>
          <Text style={{ fontSize: 15 }}>{post.title}</Text>
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 30 }}>Description</Text>
        <View style={styles.card}>
          <Text style={{ fontSize: 15 }}>{post.body}</Text>
        </View>
      </View>
      <Button title="Edit" color="red" />
    </SafeAreaView>
  );
};

export default Preview;

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
});
