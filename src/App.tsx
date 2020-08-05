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
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from "./redux/store";
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


const Stack = createStackNavigator();

const App: React.FC<Props> = (props) => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Details" component={Details} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}


export default App;
