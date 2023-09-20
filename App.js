import Login from "./components/loginPage";
import Dashboard from "./components/dashboardPage";
import Residents from "./components/residentPage";
import otpPage from "./components/otpPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer style={{ flex: "0" }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Residents" component={Residents} />
          <Stack.Screen name="otpPage" component={otpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
