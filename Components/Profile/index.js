import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Sitah Abdulatif Alsaleem</Text>

            <Text style={styles.info}>Full Stuck Developer</Text>
            <Text style={styles.description}>
              I'm Programmer, Photographer , and I find my self in everything
              that is related to computer . As well I graduated from king Faisal
              university in major computer scince, I participated in a lot of
              activites inside and outside the university , I have a very big
              passion I hope that one day i can achieve it
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(20,90,100)",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "white",
    fontWeight: "600"
  },
  body: {
    marginTop: 50
  },
  bodyContent: {
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "white",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  }
});
