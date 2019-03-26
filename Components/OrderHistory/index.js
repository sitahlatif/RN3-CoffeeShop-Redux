import React, { Component } from "react";

// NativeBase Components
import { Text, ListItem, List } from "native-base";

class OrderHistory extends Component {
  render() {
    return (
      <List>
        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            {" "}
            Order 1 : Tea - Water{" "}
          </Text>
        </ListItem>
        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            {" "}
            Order 2 : Latie - Cake
          </Text>
        </ListItem>
        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            {" "}
            Order 3 : BlackCoffee - cheese crowsen
          </Text>
        </ListItem>
        <ListItem style={{ borderBottomWidth: 0 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            {" "}
            Order 4 : AmricanoCoffee - Cookie{" "}
          </Text>
        </ListItem>
      </List>
    );
  }
}

export default OrderHistory;
