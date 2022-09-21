import React, { Component, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Preview from "./preview";
import axios from "axios";

const Main = ({ navigation }) => {
  const [allPosts, setAllPosts] = useState([]);

  async function getPost() {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts", {})
      .then(function (response) {
        // allPosts = [...response.data];
        setAllPosts(response.data.slice(0, 8));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function renderPosts() {
    getPost();
    return (
      <View style={styles.view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {allPosts.map((post) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={`post-${post.id}`}
              onPress={() => navigation.navigate("preview", { post })}
            >
              {renderPost(post)}
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* <Text>Salam</Text> */}
      </View>
    );
  }

  function renderPost(post) {
    return (
      <View style={styles.card}>
        <Text style={{ fontSize: 25 }}>{post.title}</Text>
        <Text style={{ fontSize: 15 }}>{post.body}</Text>
      </View>
    );
  }

  return <SafeAreaView style={styles.container}>{renderPosts()}</SafeAreaView>;
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  //   view: {
  //     justifyContent: "center",
  //   },
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
    width: "50%",
    alignSelf: "center",
    marginVertical: 20,
    width: 300,
    height: 250,
  },
});
