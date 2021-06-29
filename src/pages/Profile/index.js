import React from 'react'
import {Text,StyleSheet,ScrollView,View,Image,TextInput,TouchableOpacity} from 'react-native';
import { Footer } from '../../component';
import Distance from '../../utils/distance';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLock, faPhoneAlt, faSignOutAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { Btn } from '../../component';
const Profile=({navigation})=>{
    return(
        <View style={styles.container}> 
            <ScrollView styles={{flex:1}} >
                <Image source={require('../../assets/img/HeaderProfile.png')} style={{width:'100%', height:215}}/>
                <TouchableOpacity style={{position:'absolute', right:15,top:15,alignItems:'center'}} onPress={()=>navigation.navigate('Home')}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{color:'#FFFFFF'}} size={ 30 }/>
                    <Text style={{color:'#FFFFFF', fontWeight:'bold',fontSize:16}}>Logout</Text>
                </TouchableOpacity>
                <Distance distanceV={10}/>
                <View style={{alignItems:'center'}}>
                    <View style={styles.boxShadow}>
                        <Text>Pelanggan TIRO</Text>
                    </View>
                    <View style={{width:'80%'}}>
                        <View style={{flexDirection:'row'}}>
                            <FontAwesomeIcon icon={faEnvelope} size={20} style={{color:'#026BED'}}/>
                            <Distance distanceH={3}/>
                            <Text>Email</Text>
                        </View>
                        <TextInput style={styles.textInput} placeholder="Email" value="Tiro@gmail.com"/>
                        <Distance distanceV={5}/>
                        <View style={{flexDirection:'row'}}>
                            <FontAwesomeIcon icon={faLock} size={20} style={{color:'#026BED'}}/>
                            <Distance distanceH={3}/>
                            <Text>Password</Text>
                        </View>
                        <TextInput style={styles.textInput} placeholder="Password" value="*******"/>
                        <Distance distanceV={5}/>
                        <View style={{flexDirection:'row'}}>
                            <FontAwesomeIcon icon={faLock} size={20} style={{color:'#026BED'}}/>
                            <Distance distanceH={3}/>
                            <Text>Konfirmasi Password</Text>
                        </View>
                        <TextInput style={styles.textInput} placeholder="Konfirmasi Password" value="*******"/>
                        <Distance distanceV={5}/>
                        <View style={{flexDirection:'row'}}>
                            <FontAwesomeIcon icon={faPhoneAlt} size={20} style={{color:'#026BED'}}/>
                            <Distance distanceH={3}/>
                            <Text>Handphone</Text>
                        </View>
                        <TextInput style={styles.textInput} placeholder="Handphone" value="03613602800"/>
                        <Distance distanceV={5}/>
                        <View style={{flexDirection:'row'}}>
                            <FontAwesomeIcon icon={faTags} size={20} style={{color:'#026BED'}}/>
                            <Distance distanceH={3}/>
                            <Text>Alamat</Text>
                        </View>
                        <TextInput style={styles.textInput} placeholder="Password" value="Jalan Cempaka Putih "/>
                    </View>
                    <Distance distanceV={10}/>
                    <Btn title="Simpan" onPress={()=>navigation.navigate('Profile')}/>
                    <Distance distanceV={15}/>
                </View>
            </ScrollView>
            <Footer navigation={navigation} focus="Profile" />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    textInput:{
        borderBottomWidth:1, 
        borderBottomColor:'#026BED'
    },
    boxShadow :{
        alignItems:'center',
        justifyContent:'center',
        width:'70%',
        height:60,
        top:-60,
        backgroundColor:'#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 3,
    }
    })
export default Profile