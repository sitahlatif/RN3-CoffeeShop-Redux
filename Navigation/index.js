import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import Login from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
const MyStack = createStackNavigator(
  {
    Login: Login,
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(MyStack);

export default AppContainer;
