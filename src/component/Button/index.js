import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
const Btn=(props)=>{
    return (
        <TouchableOpacity style={styles.btnAddCart(props.width ? props.width:200)} onPress={props.onPress}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', height:50}}>
                {props.icon ? props.icon:null}
                <Text style={styles.textCart}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
textCart:{
    color:'#FFFFFF', 
    paddingHorizontal:10,
    fontWeight:'bold',
    fontSize:15
},
btnAddCart:(width)=>({
    backgroundColor:'#026BED', 
    height:50,
    width:width
}
),
})
export default Btn