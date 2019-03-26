//create Stack Navigator
import { createStackNavigator } from "react-navigation";

//Login and Profile Components
import Login from "../Components/Login";
import Profile from "../Components/Profile";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    initialRouteName: "Profile",
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    },
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default AuthStack;
