import React, { Component } from "react";
//Connect
import { connect } from "react-redux";

// NativeBase Components
import { List, Content, Spinner, Icon, Button } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

// Cart Button
import CartButton from "../CartButton";

class CoffeeList extends Component {
  static navigationOptions = {
    title: "Coffee List",
    headerRight: <CartButton />
  };
  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    let shops;

    if (loading) {
      return <Spinner />;
    }
    shops = coffeeShops.map(coffeeShop => (
      <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
    ));

    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(CoffeeList);
