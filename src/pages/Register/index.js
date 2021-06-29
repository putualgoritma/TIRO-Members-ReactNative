import React from 'react'
import {Text,StyleSheet,View,ImageBackground, ScrollView,Image,TextInput, TouchableOpacity} from 'react-native'
import Distance from '../../utils/distance'
const image = require('../../assets/img/BackgroundLogin.png')

const Register=({navigation})=>{
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <ScrollView>
                    <Image source={require('../../assets/img/Water.png')} style={{width:79, height:63,marginTop:90, marginLeft:20}}/>
                    <Distance distanceV={10}/>
                    <View style={{alignItems:'center'}}>
                        <View style={{width:'90%'}}>
                            <Text style={{fontWeight:'bold', fontSize:23,color:'#FFFFFF', textAlign:'center'}}>Daftar sekarang agar dapat mendapatkan pengalaman belanja yang lebih cepat dan mudah</Text>
                            <Distance distanceV={25}/>
                             {/* Start Input Nama */}
                            <Text style={styles.titleTextInput}>Nama</Text>
                            <Distance distanceV={5}/>
                            <TextInput style={styles.textInput} placeholder='Nama' placeholderTextColor='#000000'></TextInput>
                            <Distance distanceV={10}/>
                            {/* End Input Nama */}
                            {/* Start Input Email */}
                            <Text style={styles.titleTextInput}>Email</Text>
                            <Distance distanceV={5}/>
                            <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor='#000000'></TextInput>
                            <Distance distanceV={10}/>
                            {/* End Input Email */}
                            {/* Start Input Password */}
                            <Text style={styles.titleTextInput}>Password</Text>
                            <Distance distanceV={5}/>
                            <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#000000'></TextInput>
                            <Distance distanceV={10}/>
                            {/* End Input Password */}
                            {/* Start Input Konfirmasi Passowrd */}
                            <Text style={styles.titleTextInput}>Konfirmasi Password</Text>
                            <Distance distanceV={5}/>
                            <TextInput style={styles.textInput} placeholder='Konfirmasi Password' placeholderTextColor='#000000'></TextInput>
                            <Distance distanceV={10}/>
                            {/* End Input Konfirmasi Password */}
                            {/* Start Input Handphone */}
                            <Text style={styles.titleTextInput}>Handphone</Text>
                            <Distance distanceV={5}/>
                            <TextInput style={styles.textInput} placeholder='Handphone' placeholderTextColor='#000000'></TextInput>
                            <Distance distanceV={10}/>
                            {/* End Input Handphone */}
                            {/* Start Input Alamat */}
                            <Text style={styles.titleTextInput}>Alamat</Text>
                            <Distance distanceV={5}/>
                            <TextInput style={styles.textInput} placeholder='Alamat' placeholderTextColor='#000000'></TextInput>
                            {/* End Input Alamat */}
                            <Distance distanceV={25}/>
                            <View style={{alignItems:'center'}}>
                                <Distance distanceV={5}/>
                                <TouchableOpacity style={{backgroundColor:'white',height:55, width:'80%',borderRadius:10}} onPress={()=>navigation.navigate('Home')}>
                                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:55}}>
                                        <Text style={{color:'#696969', fontWeight:'bold', fontSize:18}}>Register</Text>
                                    </View>
                                </TouchableOpacity>
                                <Distance distanceV={10}/>
                                <TouchableOpacity style={{backgroundColor:'white',height:55, width:'80%',borderRadius:10}} onPress={()=>navigation.navigate('Login')}>
                                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:55}}>
                                        <Text style={{color:'#696969', fontWeight:'bold', fontSize:18}}>Kembali</Text>
                                    </View>
                                </TouchableOpacity>
                            <Distance distanceV={20}/>
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
export default Register