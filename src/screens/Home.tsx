import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Hello: React.FC<Props> = (props) => {

	const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
		<View>
			<TouchableHighlight onPress={() => props.navigation.navigate('Details',{ user : item} )} underlayColor="white">
				<View>
					<Text >	{item.name}	</Text>
					<Text>	{item.email}	</Text>
				</View>
			</TouchableHighlight>
		</View>
  );


  return (
    <View> 
			<FlatList
          data={users}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={renderItem}
        />
    </View>
  );
};

export default Hello;
