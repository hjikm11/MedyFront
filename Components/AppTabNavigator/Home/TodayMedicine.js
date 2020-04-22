import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, Image, SafeAreaView } from 'react-native';
import { Card } from 'native-base';

export default class TodayMedicine extends Component{
    render(){
        return (
            <SafeAreaView>
                <Text style = { {
                    fontSize : 20,
                    paddingHorizontal : 22,
                    color: '#080808'
                }}>오늘의 약봉투</Text>
                <View style = {styles.horizonbar}></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card style = {styles.todayMediCard}>
                        <Text style = {styles.todayMediText}>감기</Text>
                        <Text style = {styles.leftTimeText}>남은 시간</Text>
                        <Text style = {styles.leftTime}>00 : 00 : 00</Text>
                    </Card>
                    <Card style = {styles.todayMediCard}>
                        <Text style = {styles.todayMediText}>감기</Text>
                        <Text style = {styles.leftTimeText}>남은 시간</Text>
                        <Text style = {styles.leftTime}>00 : 00 : 00</Text>
                    </Card>
                    <Card style = {styles.todayMediCard}>
                        <Text style = {styles.todayMediText}>감기</Text>
                        <Text style = {styles.leftTimeText}>남은 시간</Text>
                        <Text style = {styles.leftTime}>00 : 00 : 00</Text>
                    </Card>
                    <Card style = {styles.todayMediCard}>
                        <Text style = {styles.todayMediText}>감기</Text>
                        <Text style = {styles.leftTimeText}>남은 시간</Text>
                        <Text style = {styles.leftTime}>00 : 00 : 00</Text>
                    </Card>
                    <Card style = {styles.todayMediCard}>
                        <Text style = {styles.todayMediText}>감기</Text>
                        <Text style = {styles.leftTimeText}>남은 시간</Text>
                        <Text style = {styles.leftTime}>00 : 00 : 00</Text>
                    </Card>
                    <Card style = {styles.todayMediCard}>
                        <Text style = {styles.todayMediText}>감기</Text>
                        <Text style = {styles.leftTimeText}>남은 시간</Text>
                        <Text style = {styles.leftTime}>00 : 00 : 00</Text>
                    </Card>
                </ScrollView>
                <Text style = {styles.recentMedi}>최근 복용한 약</Text>
                <View style = {styles.horizonbar}></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card style = {styles.recentMediCard}>
                        <Text style = {styles.recentMediText}>타이레놀</Text>
                        <Text style = {styles.recentTime}>2019/04/21</Text>
                    </Card>
                    <Card style = {styles.recentMediCard}>
                        <Text style = {styles.recentMediText}>타이레놀</Text>
                        <Text style = {styles.recentTime}>2019/04/21</Text>
                    </Card>
                    <Card style = {styles.recentMediCard}>
                        <Text style = {styles.recentMediText}>타이레놀</Text>
                        <Text style = {styles.recentTime}>2019/04/21</Text>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create ({
    horizonbar: {
        width: 150,
        height: 3,
        marginLeft : 20,
        backgroundColor : '#ffb6b9',
        marginTop: 3
    },
    todayMediCard : {
        width : 175,
        height : 245,
        borderRadius : 6,
        backgroundColor: '#fae3d9',
        marginLeft: 20,
        marginTop: 20
    },
    
    todayMediText: {
        fontSize: 50,
        textAlign: 'center',
        marginTop : 60
    },
    leftTimeText: {
        fontSize : 25,
        marginTop : 40,
        textalign : 'center'
    },
    leftTime : {
        fontSize : 25,
        marginTop : 10,
        textalign : 'center'
    },
    recentMedi: {
        fontSize : 15,
        fontWeight: '600',
        marginTop : 20,
        marginLeft : 20,
        color : '#484848'
    },
    recentMediCard: {
        width : 175,
        height : 70,
        borderRadius : 6,
        backgroundColor: '#bbded6',
        marginLeft: 20,
        marginTop: 10,
        flexDirection : 'row'
    },
    recentMediText: {
        fontSize : 20,
        marginTop : 20,
        textalign : 'center'
    },
    recentTime : {
        marginTop : 25,
        marginLeft : 20
    }

})