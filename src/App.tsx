/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

/*
import {
  createStackNavigator,
  createAppContainer
} from '@react-navigation/native';
*/
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./screens/Home"; 
import Details from "./screens/Details"; 
/*
const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details
  },
  { initialRouteName: "Home"}
); 
*/
// main app container
// const AppContainer = createAppContainer(AppNavigator);

const Stack = createStackNavigator();

const App: React.FC<Props> = (props) => {
	return (
		<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
	)
}


export default App;
