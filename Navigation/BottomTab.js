import React from "react";
//to create Bottom Tab Navigator
import { createBottomTabNavigator } from "react-navigation";

//Native Base Components
import { Icon } from "native-base";

//Components
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
    //to navigate through the tab
    defaultNavigationOptions: ({ navigation }) => ({
      //to change the color of each tab bar icon
      tabBarIcon: ({ tintColor }) => {
        // this way to get the route name by assign it to the navigation state
        const { routeName } = navigation.state;
        // assign the icon name and icon type to empty string
        let iconName = "";
        let iconType = "";
        // to check if the route name is equal each tab it will change the icon
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
        //return Icon depend on the name and type of above if statment
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
      //to remove the label of tab
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
