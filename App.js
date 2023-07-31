import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/LoginPage";
import Start from "./src/pages/Start";
import NewUserScreen from "./src/pages/NewUser";
import HomeScreen from "./src/pages/Home";
import RecoverScreen from "./src/pages/ForgotPass";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: "welcome" }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewUserScreen" component={NewUserScreen} />
        <Stack.Screen name="RecoverScreen" component={RecoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
