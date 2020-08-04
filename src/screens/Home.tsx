import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Hello: React.FC<Props> = (props) => {

  return (
    <View> 
			<Text>
				Hello World
			</Text>
			<Button
        title="Go to Task"
        onPress={() => props.navigation.navigate('Task')}
      />
    </View>
  );
};

export default Hello;
