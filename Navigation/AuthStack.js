import { createStackNavigator } from "react-navigation";

import Login from "../Components/Login";

const AuthStack = createStackNavigator(
  {
    Login: Login
    // Profile:Profile
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    },
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default AuthStack;
