javascript
// import necessary components
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens
import Login from './components/loginPage';
import Dashboard from './components/dashboardPage';
import Residents from './components/residentPage';
import otpPage from './components/otpPage';


// define the App component
export default function App() {

  // create a Stack Navigator
  const Stack = createNativeStackNavigator();
  
  // return the NavigationContainer with the Stack Navigator
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