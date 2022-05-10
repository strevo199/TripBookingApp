import { View,Image ,SafeAreaView,TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS,SIZES ,FONTS, onBoarding } from '../../constants';

export const OnBoarding = ({navigation}) => {
  return (
    <SafeAreaView style ={styles.container}>
      <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={onBoarding}
          resizeMode = 'contain'
          style ={{
            width: '100%', 
            height: '100%'
          }}
        />
      </View>
      
      <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style ={{alignItems: 'center', marginHorizontal: SIZES.padding}}>
          <Text style ={{...FONTS.h2,}}>Digital Ticket</Text>
          <Text style ={{color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center',...FONTS.body3}}>Easy solution to buy tickets for your travel, business trips, transportation, lodge and culianry</Text>
        </View>
        <TouchableOpacity
          style ={[styles.shadow,{marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center'}]}
          onPress ={() => {navigation.navigate('Home')}}
        >
          <LinearGradient
              style ={{height: '100%', width: '100%',alignItems: 'center', justifyContent: 'center',borderRadius: 15}}
              start ={{x: 0, y: 0,}}
              end ={{x: 1, y: 1}}
              colors ={['#46aeff', '#5884ff']}
            >
              <Text style ={{color: COLORS.white, ...FONTS.h3}}>Start !</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.84,
    elevation: 5
  }
})