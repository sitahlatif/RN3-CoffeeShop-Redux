import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

import { withNavigation } from "react-navigation";

class CoffeeItem extends Component {
  handlePress = () => {
    alert("Pressed");
  };
  render() {
    const { coffeeShop } = this.props;
    return (
      <ImageBackground
        source={{ uri: coffeeShop.background }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() =>
            this.props.navigation.navigate("CoffeeDetail", {
              coffeeShop: coffeeShop
            })
          }
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  source={{ uri: coffeeShop.img }}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{coffeeShop.name}</Text>
                <Text note style={styles.text}>
                  {coffeeShop.distance}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default withNavigation(CoffeeItem);
