import React from 'react';
import {Image,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { OnBoarding,DestinationDetail } from './src/screens';
import { barMenu,back, menu, COLORS, SIZES } from './src/constants';
import 'react-native-gesture-handler'
import { Tabs } from './src/navigation';

const theme = {
  ...DefaultTheme, 
  colors: { 
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}  

const Stack = createStackNavigator();

const App  = () => {
  return (
    <NavigationContainer  theme={theme} >
      <Stack.Navigator
        initialRouteName='' 
      > 
          {/* Screens */}
        <Stack.Screen 
            component={OnBoarding}
            options= {{
                title:null,
                headerStyle: {
                    backgroundColor: COLORS.white 
                },
                headerLeft: null,
                headerRight: () => { 
                    return(<TouchableOpacity
                        style ={{marginRight: SIZES.padding}}
                        onPress = {() => console.log('Pressed')}
                    >
                        <Image
                            source={barMenu}
                            resizeMode = 'contain'
                            style ={{
                                width:25,
                                height: 25
                            }}
 
                        />
                    </TouchableOpacity>) 
                }
            }} 
            name ="OnBoarding"  
         />
         
         {/* Tabs */}
         <Stack.Screen
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white 
            },
            headerLeft: ({onPress}) => (
              <TouchableOpacity
                onPress={onPress}
                style ={{
                  marginLeft:SIZES.padding 
                }}
              >
                <Image 
                  source={back}
                  resizeMode = 'contain'
                  style = {{
                    width: 25,
                    height: 25
                  }}
                />
              </TouchableOpacity>
            ),

            headerRight: ({}) => (
              <TouchableOpacity
                style ={{marginRight:SIZES.padding}}
                onPress ={() => console.log('Menu')}
              >
                <Image 
                  source={menu}
                  resizeMode = 'contain'
                  style ={{ 
                    width:25,
                    height: 25
                  }}
                />
              </TouchableOpacity>
            )
            
          }}


          name='Home'
          component={Tabs} 
         />
         <Stack.Screen
          name='DestinationDeatil'  
          options={{
            headerShown: false  
          }}
          component={DestinationDetail}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App  