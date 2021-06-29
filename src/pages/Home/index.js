import React,{useState} from 'react' ;
import {StyleSheet,View,ScrollView,Image,Text,TouchableOpacity}from 'react-native';
import {Footer,Line} from '../../component'
import Star from '../../assets/icon/star.svg'
import Distance from '../../utils/distance'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from'@fortawesome/react-native-fontawesome';
import { SliderBox } from "react-native-image-slider-box";
const Home =({navigation})=>{
    const [images,setImages]=useState([require('../../assets/img/Banner01.png'),require('../../assets/img/Banner02.png'),require('../../assets/img/Banner03.png')]);
    return(
        <View style={styles.container}>
            <ScrollView styles={{flex:1}}>
                {/* Start Header */}
                <Image source={require('../../assets/img/Header.png')} style={{width:'100%', height:190}}/>
                {/* End Header */}
                {/* Start Slider */}
                <Line/>
                <SliderBox
                images={images}
                sliderBoxHeight={185}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                />
                <Line/>
                 {/* End Slider */}
                <View style={{alignItems:'center'}}>
                    <View style={{width:'90%',backgroundColor:'#83D614', height:45, borderRadius:5}}>
                        <View style={{justifyContent:'center', height:45, paddingLeft:10}}>
                            <Text style={{color:'#FFFFFF', fontWeight:'bold',fontSize:18}}>Produk</Text>
                        </View> 
                    </View>
                </View>
                <Distance distanceV={10}/>
                 {/* Start Content */}
                <View style={{alignItems:'center'}}>
                    <View style={{flex:1,flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* Start Section 1 */}
                        <View style={styles.box}>
                            <Text style={styles.textBoxHeader}>REFILL GALON</Text>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>navigation.navigate('Produk')}>
                                    <Image source={require('../../assets/img/Galon.png')} style={{width:137, height:110}}/>
                                    <Distance distanceV={5}/>
                                    <Star/>
                                    <Distance distanceV={5}/>
                                    <Text style={styles.textPrice}>RP.9000,00</Text>
                                    <Distance distanceV={5}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row', height:30,alignItems:'center',justifyContent:'center'}} onPress ={()=>navigation.navigate('Cart')}>
                                    <FontAwesomeIcon icon={faCartPlus} style={{color:'#026BED'}} size={ 27 }/>
                                    <Text>Tambah Keranjang</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* End Section 1 */}
                        {/* Start Section 2 */}
                        <View style={styles.box}>
                            <Text style={styles.textBoxHeader}>CUP 220 ML</Text>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>navigation.navigate('Produk')}>
                                    <Image source={require('../../assets/img/Cup220ml.png')} style={{width:137, height:110}}/>
                                    <Distance distanceV={5}/>
                                    <Star/>
                                    <Distance distanceV={5}/>
                                    <Text style={styles.textPrice}>RP.14000,00</Text>
                                    <Distance distanceV={5}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row', height:30,alignItems:'center',justifyContent:'center'}} onPress ={()=>navigation.navigate('Cart')}>
                                    <FontAwesomeIcon icon={faCartPlus} style={{color:'#026BED'}} size={ 27 }/>
                                    <Text>Tambah Keranjang</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* End Section 2 */}
                        {/* Start Section 3 */}
                        <View style={styles.box}>
                            <Text style={styles.textBoxHeader}>BOTOL 330 ML</Text>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>navigation.navigate('Produk')}>
                                    <Image source={require('../../assets/img/Botol330ml.png')} style={{width:137, height:110}}/>
                                    <Distance distanceV={5}/>
                                    <Star/>
                                    <Distance distanceV={5}/>
                                    <Text style={styles.textPrice}>RP.28000,00</Text>
                                    <Distance distanceV={5}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row', height:30,alignItems:'center',justifyContent:'center'}} onPress ={()=>navigation.navigate('Cart')}>
                                    <FontAwesomeIcon icon={faCartPlus} style={{color:'#026BED'}} size={ 27 }/>
                                    <Text>Tambah Keranjang</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* End Section 3 */}
                        {/* Start Section 4 */}
                        <View style={styles.box}>
                            <Text style={styles.textBoxHeader}>BOTOL 600 ML</Text>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>navigation.navigate('Produk')}>
                                    <Image source={require('../../assets/img/Botol600ml.png')} style={{width:137, height:110}}/>
                                    <Distance distanceV={5}/>
                                    <Star/>
                                    <Distance distanceV={5}/>
                                    <Text style={styles.textPrice}>RP.29000,00</Text>
                                    <Distance distanceV={5}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row', height:30,alignItems:'center',justifyContent:'center'}} onPress ={()=>navigation.navigate('Cart')}>
                                    <FontAwesomeIcon icon={faCartPlus} style={{color:'#026BED'}} size={ 27 }/>
                                    <Text>Tambah Keranjang</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* End Section 4 */}
                        {/* Start Section 5 */}
                        <View style={styles.box}>
                            <Text style={styles.textBoxHeader}>BOTOL 1500 ML</Text>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>navigation.navigate('Produk')}>
                                    <Image source={require('../../assets/img/Botol1500ml.png')} style={{width:137, height:110}}/>
                                    <Distance distanceV={5}/>
                                    <Star/>
                                    <Distance distanceV={5}/>
                                    <Text style={styles.textPrice}>RP.32000,00</Text>
                                    <Distance distanceV={5}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row', height:30,alignItems:'center',justifyContent:'center'}} onPress ={()=>navigation.navigate('Cart')}>
                                    <FontAwesomeIcon icon={faCartPlus} style={{color:'#026BED'}} size={ 27 }/>
                                    <Text>Tambah Keranjang</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                         {/* End Section 5 */}
                    </View>
                </View>
                 {/* End Content */}
            </ScrollView>
            <Footer navigation = {navigation} focus = 'Home'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    box: {
        height: 250, 
        width: 160, 
        backgroundColor:'#F2F2F2',
        marginBottom: 25,
        marginHorizontal:18
    },
    textBoxHeader:{
        fontSize:12, 
        fontWeight:'bold',
        color:'#3C3B3B',
        paddingVertical:10,
        paddingLeft:15
    },
    textPrice:{
        color:'#3C3B3B', 
        fontSize:14, 
        fontWeight:'bold'
    }
});
export default Home