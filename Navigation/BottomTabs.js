import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DoctorsScrn from '../Screens/HomeScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScrn from '../Screens/ProfileScrn';
import Insights from '../Screens/Insights';
import { Card } from '../Components/Card';
import Doctors from '../Screens/Doctors';

const BottomTab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <BottomTab.Navigator  >
        <BottomTab.Screen 
                name="Home"
                component={HomeScreen}
                options={
                    {  
                        tabBarLabel : "Home" ,
                        tabBarActiveTintColor:'#5845EDAD',
                        
                        headerShown: false,
                        tabBarIcon : ({}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../assets/images/conversation.png')}
                                style={{width:35, height:35, }}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />
            
            <BottomTab.Screen 
                name="DoctorsScrn"
                component={Doctors}
                options={
                    {  
                        tabBarLabel : "Doctors" ,
                        tabBarActiveTintColor:'#5845EDAD',
                        
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../assets/images/tab.png')}
                                style={{width:35, height:35, }}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />
            <BottomTab.Screen 
                name="Insights"
                component={Insights}
                options={
                    {  
                        tabBarLabel : "Insights" ,
                        tabBarActiveTintColor:'#5845EDAD',
                        
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../assets/images/tab1.png')}
                                style={{width:35, height:35, }}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />
            <BottomTab.Screen 
                name="ProfileScrn"
                component={ProfileScrn}
                options={
                    {  
                        tabBarLabel : "Profile" ,
                        tabBarActiveTintColor:'#5845EDAD',
                        
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <View style={{paddingTop:8}}>
                                <Image
                                source={require('../assets/images/profile.png')}
                                style={{width:35, height:35, }}
                                resizeMode='contain'
                                />
                            </View>
                        )
                    }
                }
            />
    </BottomTab.Navigator>
  )
}



const styles = StyleSheet.create({})