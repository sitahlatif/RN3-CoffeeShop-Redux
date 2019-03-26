import { createStackNavigator } from "react-navigation";
//Components
import CoffeeCart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory";
const OrderStack = createStackNavigator(
  {
    CoffeeCart: CoffeeCart,
    OrderHistory: OrderHistory
  },
  {
    initialRouteName: "CoffeeCart",
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      }
    }
  }
);

export default OrderStack;
