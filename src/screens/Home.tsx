import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { connect } from "react-redux";

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

	const userSelected = item => {
		props.onUpdate(item);
		// props.navigation.navigate('Details',{ user : item} );
		props.navigation.navigate('Details');
	}

  const renderItem = ({ item }) => (
		<View  style={styles.item}>
			<TouchableHighlight onPress={() => userSelected(item)} underlayColor="white">
				<View>
					<Text style={styles.title}>	{item.name}	</Text>
					<Text style={styles.title}>	{item.email}	</Text>
				</View>
			</TouchableHighlight>
		</View>
  );


  return (
 		<SafeAreaView style={styles.container}>
			<FlatList
          data={users}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={renderItem}
        />
		</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
});

function mapStateToProps(state) {
  return {
    profile: state 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdate: profile =>
      dispatch({ type: "UPDATE", profile: profile})
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
