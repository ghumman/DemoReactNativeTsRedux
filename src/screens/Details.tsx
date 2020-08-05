import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, TouchableHighlight, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";

const Details: React.FC<Props> = (props) => {

	const {profile} = props.profile;

  return (
    <SafeAreaView style={styles.container}>
			<View style={styles.item}>
				<Text style={styles.title}>{profile.name}</Text>
				<Text style={styles.title}>{profile.company.name}</Text>
			</View>

			<View style={styles.item}>
				<Text>Contact Information</Text>
			</View>
			
			<View style={styles.item}>
				<Text>{profile.email}</Text>
				<Text>{profile.address.street}</Text>
				<Text>{profile.address.suite}</Text>
				<Text>{profile.address.city} {profile.address.zipcode}</Text>
				<Text>{profile.phone}</Text>
			</View>
			<View style={styles.item}>
				<Text>Other Information</Text>
			</View>
			<View style={styles.item}>
				<Text>{profile.username}</Text>
				<Text>{profile.website}</Text>
			</View>

		</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  	display: 'flex',
  	justifyContent: 'center',
  	alignSelf: 'center',
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

function mapStateToProps(state) {
  return {
    profile: state 
  };
}

export default connect(
  mapStateToProps,
	null
)(Details);
