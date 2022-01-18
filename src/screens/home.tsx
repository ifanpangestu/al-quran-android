import React from 'react'
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'

interface HomeProps {
    navigation: any;
  }
const Home = (props:HomeProps) => {
    return (
        <ScrollView>
        <View>
                <View style={{backgroundColor:'#bdbdbd',height:500,justifyContent:'center',alignItems:'center' }}>
                    
                    <View style={{justifyContent:'center',
                        alignItems:'center'}}>
                        <Image 
                        source={require('../gambar/bsm.png')}
                        style={{height:100,width:240}}
                        />
                    </View>
                    <View style={{justifyContent:'center',
                        alignItems:'center', 
                        height:270,
                        width:270, 
                        borderWidth:3,
                        borderColor:'#bdbdbd',
                        borderRadius:150,
                        marginTop:80}}>
                        <Image 
                        source={require('../gambar/aa.png')}
                        style={{width:350,height:350}}
                        />
                    </View>            
                </View>
                <View style={{flexDirection:'row',backgroundColor:'#bdbdbd',height:306,flexWrap:'wrap',justifyContent:'center',alignItems:'center',}}>
                <View >
                        <TouchableOpacity
                                  onPress = {() => 
                                    props.navigation.navigate('Home')
                                }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:100,
                            borderWidth:2,
                            borderColor:'#bdbdbd',
                            borderRadius:30,
                            marginTop:80,                           
                            marginLeft:18}}>

                        <Image 
                        source={require('../gambar/qr.png')}
                        style={{width:100,height:100}}
                        />
                    
                    </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                       onPress = {() => 
                        props.navigation.navigate('As')
                    }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:100,
                            borderWidth:2,
                            borderColor:'#bdbdbd',
                            borderRadius:30,
                            marginTop:80,
                            marginLeft:10}}>

                    <Image 
                        source={require('../gambar/as.png')}
                        style={{width:100,height:100}}
                        />
                       
                    </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                        onPress = {() => 
                            props.navigation.navigate('Tahlil')
                        }>

                    <View style={{
                            justifyContent:'center',
                            alignItems:'center', 
                            height:100, 
                            width:100,
                            borderWidth:2,
                            borderColor:'#bdbdbd',
                            borderRadius:30,
                            marginTop:80,
                            marginLeft:10}}>

                    <Image 
                        source={require('../gambar/dzikir.png')}
                        style={{width:100,height:100}}
                        />
                    </View>
                        </TouchableOpacity>
                    </View>

                    
                    
                    </View>

                    
                   
        </View>
        </ScrollView>
    )
}

export default Home




