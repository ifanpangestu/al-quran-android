import React from 'react'
import { View, Text,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const As = () => {
    return (
        <ScrollView>
            <View style={{
                    alignItems:'center',backgroundColor:'#bdbdbd',height:806}}>
                    <View>
                        <Image 
                        source={require('../gambar/bsm.png')}
                        style={{height:100,width:200}}
                        />
                    </View>

                    

                    <View style={{
                        justifyContent:'center',
                        padding:10,
                        height:250,
                        width:360, 
                        borderWidth:2,
                        borderColor:'#c56200',
                        marginTop:20}}>
                            <Text style={{fontSize:21,color:'black' ,fontWeight:'bold',marginLeft:90,marginTop:-20,paddingBottom:30 }}>
                        DOA Khatam Al-Qur'an</Text>

                        <Text style={{fontSize:25,color:'black',marginLeft:10}}>
                        اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً، اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَا نُسِّيتُ وَعَلِّمْنِي
                        مِنْهُ مَا جَهِلْتُ وَارْزُقْنِي تِلَاوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ وَاجْعَلْهُ لِي حُجَّةً يَا رَبَّ الْعَالَمِينَ

                        </Text>
                    </View>
                    <View style={{
                        justifyContent:'center',
                        padding:10,
                        height:250,
                        width:360, 
                        borderWidth:2,
                        borderColor:'#c56200',
                        marginTop:20}}>
                            <Text style={{fontSize:21,color:'black' ,fontWeight:'bold',marginLeft:140,marginTop:-20,paddingBottom:30 }}>
                        Artinya </Text>

                        <Text style={{fontSize:20,color:'black',marginLeft:10}}>
                        “Ya Allah, rahmatilah aku dengan Al-Quran. Jadikanlah ia sebagai pemimpin, cahaya, petunjuk, dan rahmat bagiku. 
                        Ya Allah, ingatkanlah aku atas apa yang terlupakan darinya. Ajarilah aku atas apa yang belum tahu darinya. 
                        Berikanlah aku kemampuan membacanya sepanjang malam dan ujung siang. Jadikanlah ia sebagai pembelaku, wahai tuhan semesta alam.”



                        </Text>
                    </View>
            </View>
        </ScrollView>
    )
}

export default As
