import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Icon } from 'native-base';
import MedicineList from './MedicineList';
import MedicineCal from './MedicineCal';


export default class MedicineHistory extends Component {
    render() {
        return (
            <ScrollableTabView
            
            renderTabBar = { () => (
                <ScrollableTabBar
                    style = {styles.scrollStyle}
                    tabStyle = {styles.tabStyle}
                />
            )}
            tabBarTextStyle={styles.tabBarTextStyle}
            tabBarInactiveTextColor={'black'}
            tabBarActiveTextColor={'#ffb6b9'}
            tabBarUnderlineStyle={styles.underlineStyle}
            initialPage={2}
            >
               <View key={'1'} tabLabel={'List'}> <MedicineList/></View>
               <View key={'2'} tabLabel={'Calender'}> <MedicineCal/></View>
            </ScrollableTabView>
        );
    }
};

const styles = StyleSheet.create({
    tabStyle:{},
    scrollStyle:{
        backgroundColor: 'white',
        paddingLeft: 65,
        paddingRight: 65,
        justifyContent: 'center'
    },
    tabBarTextStyle: {
        fontSize: 14,
        fontWeight: 'normal'
    },
    underlineStyle: {
        height: 3,
        backgroundColor: '#ffb6b9',
        borderRadius: 3,
        width: 15,
    }
})