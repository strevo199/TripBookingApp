import { StyleSheet, FlatList, Image,TouchableOpacity, Text, View } from 'react-native'
import React,{useState} from 'react'
import { COLORS,SIZES,frozenHill,airplane } from '../../constants';
import LinearGradient from 'react-native-linear-gradient'; 
import { FONTS } from '../../constants/theme';
import { train,compass,eat,bed, taxi, bus, eventt } from '../../constants/icons';
import { skiVilla, climbing, bleach } from '../../constants/images';

const OptionItem = ({icon, bgColor, label,onPress}) => {


    return(  
        <TouchableOpacity 
            style ={{ 
                flex: 1, alignItems: 'center', justifyContent: 'center'
            }}
            onPress ={onPress}
        >
            <View style ={[styles.shadow, {width: 60, height: 60}]}>
                <LinearGradient
                    style ={{flex: 1, alignItems: 'center', justifyContent: 'center',borderRadius: 15}}
                    colors ={bgColor}
                    start ={{x: 0, y: 0}}
                    end ={{x:0, y:1}}
                > 
                    <Image
                        resizeMode='cover'
                        source={icon}
                        style = {{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30
                        }}
                    /> 
                </LinearGradient>
            </View>
             <Text style ={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>{label}</Text>
        </TouchableOpacity>
    )
}

export const Home = ({navigation}) => {

    const [destinations, setDestinations] = useState([
        {
            id: 0,
            name: 'Ski Villa',
            img: skiVilla
        },
        {
            id: 1,
            name: 'Climbing Hills',
            img: climbing
        },
        {
            id: 2,
            name: 'Frozen Hills',
            img: frozenHill
        },
        {
            id: 3,
            name: 'Beach',
            img: bleach
        },
        
    ])


    const renderDestinatons = (item,index) => {

        var destinationStyle = {};

        if(index == 0) {
            destinationStyle = {marginLeft: SIZES.padding}
        }


        return (
            <TouchableOpacity
                style ={{justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle}}
                onPress = { () =>{navigation.navigate('DestinationDeatil')}}
            >
                <Image
                    source={item.img} 
                    resizeMode = 'cover'
                    style ={{ 
                        width: SIZES.width * 0.28, 
                        height: '82%',
                        borderRadius: 15 
                    }}
                />
                <Text style ={{marginTop: SIZES.base / 2, ...FONTS.h4}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

  return (
    <View style ={styles.container}>
      {/* <Banner */}
      <View style ={{flex:1, marginTop:SIZES.base, paddingHorizontal: SIZES.padding}}> 
        <Image
            source={frozenHill}
            resizeMode ='cover'
            style = {{
                width: '100%',
                height: '100%'
            }} 
        />
      </View> 
 
      {/* Options */}
  
    <View style ={{flex: 1, justifyContent: 'center'}}>
        <View style ={{flexDirection: 'row', marginTop:SIZES.padding, paddingHorizontal: SIZES.padding}}>
            <OptionItem
                icon = {airplane}
                bgColor = {['#46aeff', '#5884ff']}
                label = 'Flight' 
                onPress = {() => console.log('Flight')}
            />  
            <OptionItem 
                icon = {train} 
                bgColor = {['#fddf90', '#fcda13']}
                label = 'Train'
                onPress = {() => console.log('Train')}
            />   
            <OptionItem 
                icon = {bus} 
                bgColor = {['#e973ad', '#da5df2']}
                label = 'Bus'  
                onPress = {() => console.log('Bus')}
            /> 
            <OptionItem 
                icon = {taxi} 
                bgColor = {['#fcaba8', '#fe6bba']}
                label = 'Taxi'  
                onPress = {() => console.log('Taxi')}
            />
        </View>
        <View style ={{flexDirection: 'row', marginTop:SIZES.padding, paddingHorizontal: SIZES.padding}}>
            <OptionItem
                icon = {bed}
                bgColor = {['#ffc465', '#ff9c5f']}
                label = 'Flight' 
                onPress = {() => console.log('Bed')}
            />  
            <OptionItem 
                icon = {eat} 
                bgColor = {['#7cf1fb', '#4ebefd']}
                label = 'Eats' 
                onPress = {() => console.log('Eats')}
            />   
            <OptionItem 
                icon = {compass} 
                bgColor = {['#fcaba8', '#fe6bba']}
                label = 'Compass'  
                onPress = {() => console.log('Compass')}
            /> 
            <OptionItem 
                icon = {eventt} 
                bgColor = {['#fcaba8', '#fe6bba']}
                label = 'Event'  
                onPress = {() => console.log('Event')}
            />
        </View>
      </View>


      {/* Destination */}
      <View style ={{flex: 1,}}>
            <Text style ={{marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2}}>Destination</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data ={destinations}
                keyExtractor = {item => item.id.toString()}
                renderItem ={({item,index}) => renderDestinatons(item,index)}
            />
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
            width:0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})