import React,{useState} from 'react';
import {Text,View,StyleSheet,ScrollView,Image}from 'react-native';
import {Footer,Line,Title,TextTitle,Btn} from '../../component';
import Distance from '../../utils/distance';
const CompleteOrder =({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView styles={{flex:1}}>
                <Distance distanceV={10}/>
                <Title title='Complete Order'/>
                <View style={{alignItems:'center'}}>
                    <View style={{width:'90%'}}>
                        <Line/>
                        {/* Start Section 1 */}
                        <View style={styles.box}>
                            <Distance distanceV={10}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Distance distanceH={10}/>
                                    <Image source={require('../../assets/img/Galon.png')} style={{width:123, height:100}}/>
                                </View>
                                <Distance distanceH={10}/>
                                <View style={{flexDirection:'column'}}>
                                    <TextTitle title="REFILL GALON"/>
                                    <Distance distanceV={2}/>
                                    <Text>Rp.9000,00</Text>
                                    <Text>Jumlah: 1</Text>
                                </View>
                            </View>
                            <Distance distanceV={10}/>
                        </View>
                        {/* End Section 1 */}
                         <Line/>
                         <View style={{alignItems:'center'}}>
                            <View style={{flexDirection:'row', height:50,alignItems:'center'}}>
                                <View>
                                    <TextTitle title="Total Harga"/>
                                    <Text>Rp.223.000,00</Text>
                                </View>
                                <Distance distanceH={5}/>
                                <Btn title="Checkout" onPress={()=>navigation.navigate('Home')}/>
                            </View>
                         </View>
                         <Distance distanceV={20}/>
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation} focus="Cart"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    box:{
        backgroundColor:'#F2F2F2'
    }
})
export default CompleteOrder