import { createStackNavigator } from "react-navigation";
//Components
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

const CoffeeStack = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail
  },
  {
    initialRouteName: "CoffeeList",
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

export default CoffeeStack;
