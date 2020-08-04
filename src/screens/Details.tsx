import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Details: React.FC<Props> = (props) => {

	const {user} = props.route.params; 

  return (
    <View> 
			<Text>
				{user.name}
			</Text>
    </View>
  );
};

export default Details;
