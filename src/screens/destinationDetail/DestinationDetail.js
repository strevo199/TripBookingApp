import { View,Image,StyleSheet,TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import {skiVillaBanner, skiVilla} from '../../constants/images'
import { fullstar,starHalfEmpty,parking, wind, villa, nooStar, back } from '../../constants/icons';
import LinearGradient from 'react-native-linear-gradient';




const IconLabel = ({icon,label})  => {
  return (
    <View style  ={{alignItems: 'center'}}>
      <Image
          source={icon}
          resizeMode = 'cover'
          style ={{
            width: 50,
            height: 50
          }}
      />
      <Text style ={{marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3}}>{label}</Text>
    </View>
  )
}


const StarReview = ({rate})  => {
 
  var starComponents = [];
  var fullStar = Math.floor(rate);
  var noStar = Math.floor(5 - rate);
  var halfStar = 5 - fullStar - noStar;

  // fullstar;
  for (var i = 0; i < fullStar; i++) {
    starComponents.push(
      <Image
        key={`full-${i}`}
        source ={fullstar}
        resizeMode ='cover'
        style ={{
          width: 20,
          height: 20
        }}
      />
    )
  }

  // Half Star;
  for (var i = 0; i < halfStar; i++) {
    starComponents.push(
      <Image
        key={`half-${i}`}
        source ={starHalfEmpty}
        resizeMode ='cover'
        style ={{
          width: 20,
          height: 20
        }}
      />
    )
    
  } 

  // No Star
  for (var i = 0; i < noStar; i++) {
    starComponents.push(
      <Image
        key={`no-${i}`}
        source ={nooStar}
        resizeMode ='cover'
        style ={{
          width: 20,
          height: 20
        }}
      />
    )
    
  } 

  return (
    <View style = {{flexDirection: 'row', alignContent: 'center'}}>
      {starComponents}
      <Text style ={{color: COLORS.gray, ...FONTS.body3, marginLeft: SIZES.base}}>{rate}</Text>
    </View>
  )
}
export const DestinationDetail = ({navigation}) => {
  return (
    <View style ={styles.container}>
      {/* Header */}
      <View style ={{flex: 2}}>
        <Image
          source={skiVillaBanner}
          resizeMode ='cover'
          style ={{
            width: '100%',
            height: '80%'
          }}
        /> 
        <View style ={[{
          position: 'absolute',
          bottom: '5%', 
          left: '5%',
          right: '5%',
          borderRadius: 15,
          padding: SIZES.padding,
          backgroundColor: COLORS.white},styles.shadow
        ]}>
          <View style = {{flexDirection: 'row'}}>
            <View style ={styles.shadow}>
              <Image
                source={ skiVilla}
                resizeMode = 'cover'
                style ={{
                  width: 70,
                  height: 70,
                  borderRadius: 15
                }}
              />
            </View>
            <View style ={{marginHorizontal: SIZES.radius,  justifyContent: 'space-around'}}>
                <Text style ={{...FONTS.h3}}>Ski Villa</Text>
                <Text style ={{color: COLORS.gray, ...FONTS.body3}}>France</Text>

                <StarReview
                  rate = {4.2} 
                /> 
            </View>
          </View>
          <View style ={{marginTop: SIZES.radius}}>
            <Text style ={{ color:COLORS.gray, ...FONTS.body4}}>Ski Villa offers simple rooms with mountain views in fonts of theski lift to the Ski resort</Text>
          </View> 
        </View> 
        {/* Header Button */}
            <View
              style ={{
                position: 'absolute',
                top: 50,
                left: 20,
                right: 20,
                flexDirection: 'row'
              }}
            >
                <View style ={{flex: 1}}>
                  <TouchableOpacity
                    onPress={() => {navigation.navigate('Home')}}
                  >
                    <Image
                      source={ back}
                      resizeMode ='cover'
                      style ={{
                        width: 30,
                        tintColor: COLORS.white,
                        height: 30,
                        borderColor:COLORS.lightGray,
                        borderWidth:1,
                        padding:1,
                        borderRadius: 30 
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style ={{flex: 1}}>

                </View>
            </View>
        <View>

        </View>
      </View>

      {/* Body */} 
      <View style ={{flex: 1.5}}>
          {/* Icons */}
          <View style ={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding, justifyContent: 'space-between'}}>
              <IconLabel
                icon ={villa}
                label = 'Villa'
              />
              <IconLabel
                icon ={parking}
                label = 'Praking'
              />
              <IconLabel
                icon ={wind}
                label = '4 °C' 
              />
          </View>
          {/* About */}
          <View style ={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
            <Text>About</Text>
            <Text style ={{marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3}}>Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators. Made with  and  in Bentonville, Boston,</Text>
          </View>
      </View> 
      {/* Footer */} 
      <View style ={{flex: 0.5, paddingHorizontal: SIZES.padding}}>
          <LinearGradient
            style ={{height: 70, width: '100%', borderRadius: 15}}
            colors = {['#edf0fc', '#d6dfff']}
            start ={{x: 0, y: 0}}
            end = {{x: 1, y: 0}}
          >
            <View style ={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View style ={{paddingHorizontal: SIZES.padding, justifyContent: 'center'}}>
                <Text style ={{...FONTS.h1}}>$1000</Text>
              </View> 
              <TouchableOpacity
                style ={{width: 130, height: '80%', marginHorizontal: SIZES.radius}}
                onPress = {() => {console.log('Booking on Pressed')}}
              >
                <LinearGradient
                  style ={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}
                  colors = {['#46aeff', '#588aff']}
                  start ={{x: 0, y: 0}}
                  end = {{x: 1, y: 0}} 
                >
                  <Text style ={{color: COLORS.white, ...FONTS.h2}} >BOOKING</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
      </View>
    </View> 
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
      height: 2
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5
  }
})