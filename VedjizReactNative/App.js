/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import SignUp from './Components/SignUp';
import SignUpForm from './Components/FormSignUp';

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Market from "./Components/Market";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Inscription' component={SignUpForm}/>
            <Stack.Screen name='Le marché' component={Market}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}
