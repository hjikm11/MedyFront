import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import SearchBar from '../SearchBar';
import TodayMedicine from './TodayMedicine';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';


export default class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style = {styles.outside}>
                <View style = {styles.tabName}>
                    <Text style = {styles.name}>
                        HOME
                    </Text>
                </View>

                <View style = {styles.searchBar}>
                    <SearchBar/> 
                </View>
                <TodayMedicine/>
            </View>

        );
    }
};

const styles = StyleSheet.create( {
    outside: {
        flex : 1,
        backgroundColor : '#ffb6b9'
    },
    tabName: {
        marginTop: 90,
        marginLeft: 20,
        height: '10%'
    },
    name: {
        position: 'absolute',
        fontSize: 25,
        fontWeight: 'bold',
        lineHeight: 25,
        fontStyle: 'fantasy',
        color : '#592e3b'
    },
    searchBar: {
        height: '10%'
    }
})

