 import { StyleSheet, Image, Text, View } from 'react-native';
 import React from 'react';
 import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { COLORS, search, bookMark, user,homeicon } from '../constants';
import { Home,Search,BookMark,Account } from '../screens';

 const Tab = createBottomTabNavigator();

 const tabOptions = {
     showLabel: false,
     style: {
         height: 90,
         shadowColor: '#000',
         shadowOffset: {
             width: 0,
             height: 10 
         },
         shadowOpacity: 0.53,
         shadowRadius: 13.97,
         elevation: 21
     }
 }
 
 export const Tabs = () => {
   return (
     <Tab.Navigator
        tabBarOptions={tabOptions}
        screenOptions ={({route}) => ({
            tabBarIcon: ({focused}) => {
                const tintColor = focused ? COLORS.primary :COLORS.gray;

                switch (route.name) {
                    case 'Main':
                        return (
                            <Image
                                source={homeicon} 
                                resizeMode ='contain'
                                style ={{
                                    width: 25,
                                    height: 25,
                                    tintColor: tintColor
                                }}
                            /> 
                        )
                    case 'Search':
                        return (
                            <Image
                                source={search}
                                resizeMode ='contain'
                                style ={{
                                    width: 25,
                                    height: 25,
                                    tintColor
                                }}
                            /> 
                        )
                    case 'BookMark':
                        return (
                            <Image
                                source={bookMark}
                                resizeMode ='contain'
                                style ={{
                                    width: 25,
                                    height: 25,
                                    tintColor
                                }}
                            /> 
                        )
                    case 'Account':
                        return (
                            <Image
                                source={user}
                                resizeMode ='contain'
                                style ={{
                                    width: 25,
                                    height: 25,
                                    tintColor
                                }}
                            /> 
                        )
                }
            }
        })}
     >
         <Tab.Screen
            options={{headerShown: false}}
         name='Main' component={Home} />
         <Tab.Screen name='Search' component={Search} />
         <Tab.Screen name='BookMark' component={BookMark} />
         <Tab.Screen name='Account' component={Account} />
     </Tab.Navigator>
   )
 }
 
 
 const styles = StyleSheet.create({})