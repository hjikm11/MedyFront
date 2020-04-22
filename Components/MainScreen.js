import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';

import HomeTab from './AppTabNavigator/Home/HomeTab';
import HistoryTab from './AppTabNavigator/History/HistoryTab';
import AddMedicineTab from './AppTabNavigator/AddMedicine/AddMedicineTab';
import StoreTab from './AppTabNavigator/Store/StoreTab';
import MyProfileTab from './AppTabNavigator/MyProfile/MyProfileTab';
//하단 탭 네비게이터 생성 
const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab: { screen: HomeTab },
    HistoryTab: { screen: HistoryTab },
    AddMedicineTab: { screen: AddMedicineTab},
    StoreTab: { screen: StoreTab },
    MyProfileTab: { screen: MyProfileTab }
  }, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios:{
            backgroundColor:'white',
          }
        })
      },
      iconStyle: { height: 100 },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true,
    }  
  });

/*  
const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    HistoryTab: { screen:  HistoryTab },
    AddMedicineTab: { screen: AddMedicineTab },
    StoreTab: { screen: StoreTab },
    MyProfileTab: { screen: MyProfileTab }
  });
*/

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    render() {
        return (
            <AppTabContainet />
        );
    }
}

const styles = StyleSheet.create( {
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'content'
    },
});