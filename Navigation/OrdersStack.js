import { createStackNavigator } from "react-navigation";

import CoffeeCart from "../Components/CoffeeCart";
const OrderStack = createStackNavigator(
  {
    CoffeeCart: CoffeeCart
  },
  {
    initialRouteName: "CoffeeCart",
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    },
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default OrderStack;
