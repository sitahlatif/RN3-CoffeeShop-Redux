import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button, Icon } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  //navigation option to a specific thing to the cart item
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Icon
          onPress={() => navigation.navigate("OrderHistory")}
          name="history"
          type="FontAwesome"
          style={{ color: "white" }}
        />
      )
    };
  };
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default connect(mapStateToProps)(CoffeeCart);
