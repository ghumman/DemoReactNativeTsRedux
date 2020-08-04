import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Details: React.FC<Props> = (props) => {

	const {user} = props.route.params; 

  return (
    <View> 
			<Text>{user.name}</Text>
			<Text>{user.company.name}</Text>

			<Text>Contact Information</Text>
			
			<Text>{user.email}</Text>
			<Text>{user.address.street}</Text>
			<Text>{user.address.suite}</Text>
			<Text>{user.address.city} {user.address.zipcode}</Text>
			<Text>{user.phone}</Text>
			<Text>Other Information</Text>
			<Text>{user.username}</Text>
			<Text>{user.website}</Text>
    </View>
  );
};

export default Details;
