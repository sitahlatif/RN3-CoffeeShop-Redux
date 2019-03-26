import React, { Component } from "react";
import { View } from "react-native";
// Connect
import { connect } from "react-redux";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// calling AppContainer from NAvigation folder
import AppContiner from "../../Navigation";

// calling the action direct from the coffeeActions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

class HomePage extends Component {
  //method to  did mount the getCoffeeShops()
  componentDidMount() {
    this.props.getCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContiner />
      </Container>
    );
  }
}
//dispatch the getCoffeeShops
const mapDispatchToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
