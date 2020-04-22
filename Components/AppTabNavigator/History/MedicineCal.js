  import React, { Component } from 'react';
  import { Text, View, StyleSheet } from 'react-native';
  import CalendarPicker from 'react-native-calendar-picker';

  export default class MedicineCal extends Component {
      render() {
          return (
            <View>
                <CalenderPicker/>
            </View>
          )
      }
  }