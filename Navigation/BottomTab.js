import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";

import AuthStack from "./AuthStack";
import CoffeeStack from "./CoffeeStack";
import OrderStack from "./OrdersStack";

const BottomTab = createBottomTabNavigator(
  {
    AuthStack: AuthStack,
    CoffeeStack: CoffeeStack,
    OrderStack: OrderStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        if (routeName === "AuthStack") {
          iconName = "login";
          iconType = "AntDesign";
        } else if (routeName === "CoffeeStack") {
          iconName = "coffee";
          iconType = "FontAwesome5";
        } else if (routeName === "OrderStack") {
          iconName = "shoppingcart";
          iconType = "AntDesign";
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: tintColor, fontSize: 25 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#b8cdd0",
      inactiveTintColor: "white",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomTab;
