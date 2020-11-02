import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { setNavigator } from "./src/navigationRef";
import { Button } from "native-base";

//Providers
import { Provider as AuthProvider } from "./src/context/AuthContext";

//Screens
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TravelListScreen from "./src/screens/TravelListScreen";
import TripDetailScreen from "./src/screens/TripDetailScreen";
import TripEditScreen from "./src/screens/TripEditScreen";
import TripCreateScreen from "./src/screens/TripCreateScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import SplashScreen from "./src/screens/SplashScreen";

//Components
import Drawer from "./src/components/Drawer";

const switchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  LoginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  MainFlow: createDrawerNavigator(
    {
      TravelFlow: createStackNavigator(
        {
          TravelList: TravelListScreen,
          TripDetail: TripDetailScreen,
          TripEdit: TripEditScreen,
          TripCreate: TripCreateScreen,
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: "#738290",
            },
            headerTitleStyle: {
              color: "white",
            },
          },
        }
      ),
      CalendarFlow: createStackNavigator(
        {
          Calendar: CalendarScreen,
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: "#738290",
            },
            headerTitleStyle: {
              color: "white",
            },
          },
        }
      ),
    },
    { contentComponent: Drawer }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
