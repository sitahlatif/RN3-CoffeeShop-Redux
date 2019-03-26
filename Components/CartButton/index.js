import React, { Component } from "react";
//Icon
import { Icon } from "native-base";
//withNavigation
import { withNavigation } from "react-navigation";
class CartButton extends Component {
  render() {
    return (
      //create cart button in order to use it in different component
      <Icon
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
        name="shoppingcart"
        type="AntDesign"
      />
    );
  }
}
export default withNavigation(CartButton);
