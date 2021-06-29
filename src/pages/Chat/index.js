import React from 'react'
import { StyleSheet,View,ScrollView,Image}from 'react-native';
import { Footer } from '../../component';
const Chat =({navigation})=>{
    return(
        <View style={styles.container}> 
            <ScrollView styles={{flex:1}} >
                <View style={{alignItems:'center'}}>      
                    <Image source={require('../../assets/img/HeaderChat.png')} style={{width:'100%', height:138}}/>
                    <Image source={require('../../assets/img/Chat.png')} style={{width:360, height:414}}/>
                </View>
            </ScrollView>
            <Footer navigation={navigation} focus="Chat"/>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#FFFFFF'
},
})
export default Chat