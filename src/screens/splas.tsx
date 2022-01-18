import { StackActions } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { View, Text,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



interface SplashProps {
    navigation: any;
  }

const Splash = (props:SplashProps) => {
    useEffect(()=> {
        setTimeout(() => {
             props.navigation.dispatch(StackActions.replace('Awal'))
        }, 3000)
    })
    return (
        <ScrollView>
        <View style={{justifyContent:'center',alignItems:'center',height:806,backgroundColor:'#bdbdbd'}}>
            <View style={{justifyContent:'center',alignItems:'center',
                height:5000,
                width: 5000,
                borderWidth:5,
                backgroundColor:'#bdbdbd',
                borderColor:'#bdbdbd',
                borderRadius:1}}>           
            <Image source={require('../gambar/quran.jpg')}
            style={{
                width:700,
                height:900,
                }}></Image>
            </View>
        </View>
        </ScrollView>
    );
};

export default Splash;