import React from 'react'
import {Text,StyleSheet,View,ImageBackground, ScrollView,Image,TextInput, TouchableOpacity} from 'react-native'
import Distance from '../../utils/distance'
const image = require('../../assets/img/BackgroundLogin.png')

const Login=({navigation})=>{
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <ScrollView>
                    <Image source={require('../../assets/img/Water.png')} style={{width:79, height:63,marginTop:90, marginLeft:20}}/>
                    <Distance distanceV={10}/>
                    <View style={{alignItems:'center'}}>
                        <View style={{width:'90%'}}>
                            <Text style={{fontWeight:'bold', fontSize:23,color:'#FFFFFF', textAlign:'center'}}>Masuk ke akun agar dapat melakukan transaksi dan melihat pesanan anda</Text>
                            <Distance distanceV={25}/>
                             {/* Start Input Email */}
                            <Text style={styles.titleTextInput}>Email</Text>
                            <Distance distanceV={5}/>
                            <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor='#000000'></TextInput>
                            <Distance distanceV={10}/>
                            {/* End Input Email */}
                            {/* Start Input Password */}
                            <Text style={styles.titleTextInput}>Password</Text>
                            <Distance distanceV={5}/>
                            <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#000000'></TextInput>
                            {/* End Input Password */}
                            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                                <Text style={{color:'#FFC805',fontWeight:'bold',fontSize:15}}>Lupa Password ?</Text>
                            </View>
                            <Distance distanceV={25}/>
                            <View style={{alignItems:'center'}}>
                                <View style={{flexDirection:'row', width:'80%'}}>
                                    <Text style={{fontSize:15, color:'#FFFFFF'}}>Belum Terdaftar?</Text>
                                    <Distance distanceH={5}/>
                                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                                        <Text style={{color:'#FFC805',fontWeight:'bold',fontSize:15}}>Buat Akun</Text>
                                    </TouchableOpacity>
                                </View>
                            <Distance distanceV={5}/>
                                <TouchableOpacity style={{backgroundColor:'white',height:55, width:'80%',borderRadius:10}} onPress={()=>navigation.navigate('Home')}>
                                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:55}}>
                                        <Text style={{color:'#696969', fontWeight:'bold', fontSize:18}}>Login</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>                
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    titleTextInput:{

    },
    textInput :{
        backgroundColor:'white', 
        height:55, 
        borderRadius:5, 
        opacity:0.5,  
        paddingHorizontal:20
    },
    titleTextInput :{
        fontWeight:'bold',
        color:'#FFFFFF', 
        fontSize:20
    }
    
  });
export default Login