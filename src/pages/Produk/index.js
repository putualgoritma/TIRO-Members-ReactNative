import React from 'react'
import{Text,View,StyleSheet,Image,TouchableOpacity,ScrollView}from 'react-native';
import Distance from '../../utils/distance'
import {Footer,Line,Title,TextTitle,Btn} from '../../component'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
const Produk =({navigation})=>{
     return(
        <View style={styles.container}>
            <ScrollView style={{flex:1}}>
            <Distance distanceV={10}/>
            <Title title='Detail Produk'/>
            <Distance distanceV={10}/>
            {/* Start Image Detail */}
                <View style={{alignItems:'center'}}>
                    <View style={styles.box}>
                        <View style={{alignItems:'center',top:15}}>
                            <Image source={require('../../assets/img/Galon.png')} style={{width:300, height:241}}/>
                        </View>
                    </View>
                </View>
            {/* End Image Detail */}
            {/* Start Content Detail */}
                <View style={{alignItems:'center'}}>
                    <View style={{width:'90%'}}>
                        <TextTitle title='Rp.9000,00'/>
                        <Distance distanceV={2}/>
                        <Text>REFILL GALON</Text>
                        <Line/>
                        <TextTitle title='Informasi Produk'/>
                        <Distance distanceV={2}/>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text>Kondisi</Text>
                            <Text>Isi Ulang</Text>
                        </View>
                        <Distance distanceV={2}/>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text>Pemesanan Minimal</Text>
                            <Text>1 Galon</Text>
                        </View>
                        <Line/>
                        <TextTitle title='Deskripsi'/>
                        <Distance distanceV={2}/>
                        <Text>Air Kesehatan Tiro dapat mencegah 31 jenis penyakit, extra oxygen serta berstandar SNI & BPOM</Text>
                        <Distance distanceV={15}/>
                        <View style={{alignItems:'center'}}>
                            <Btn width={250} title="Tambah Keranjang" icon={<FontAwesomeIcon icon={faCartPlus} style={{color:'#FFFFFF'}} size={ 27 }/>} onPress={()=>navigation.navigate('Cart')}/>
                        </View>
                        <Distance distanceV={15}/>
                    </View>
                </View>
            {/* End Content Detail */}
            </ScrollView>
            <Footer navigation ={navigation} focus ='Home'/>
        </View> 
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    box: {
        height: 275, 
        width: '85%', 
        backgroundColor:'#F2F2F2',
        marginBottom: 25,
        marginHorizontal:18,
    },
    textBoxHeader:{
        fontSize:12, 
        fontWeight:'bold',
        color:'#3C3B3B',
        paddingVertical:10,
        paddingLeft:15
    },
    textCart:{
        color:'#FFFFFF', 
        paddingHorizontal:10,
        paddingVertical:3, 
        fontWeight:'bold',
        fontSize:15
    },
    btnAddCart:{
        backgroundColor:'#026BED', 
        height:50, 
        width:250
    }
})
export default Produk