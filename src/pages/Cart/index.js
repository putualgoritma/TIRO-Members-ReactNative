import React,{useState} from 'react';
import {Text,View,StyleSheet,ScrollView,Image}from 'react-native';
import {Footer,Line,Title,TextTitle,Btn} from '../../component';
import Distance from '../../utils/distance';
import CheckBox from '@react-native-community/checkbox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMinusCircle, faPlusCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
const Cart =({navigation})=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        <View style={styles.container}>
            <ScrollView styles={{flex:1}}>
                <Distance distanceV={10}/>
                <Title title='Keranjang'/>
                <Distance distanceV={10}/>
                <View style={{alignItems:'center'}}>
                    <View style={{width:'90%'}}>
                        {/* Start Header */}
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text>Pilih Semua Barang</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:'#EF0808',fontWeight:'bold'}}>Hapus</Text>
                                <Distance distanceH={2}/>
                                <FontAwesomeIcon icon={faTrashAlt} style={{color:'#EF0808'}} size={ 17 }/>
                            </View>
                        </View>
                        <Line/>
                        {/* End Header */}
                        {/* Start Section 1 */}
                        <View style={styles.box}>
                            <Distance distanceV={15}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                    <Image source={require('../../assets/img/Galon.png')} style={{width:123, height:100}}/>
                                </View>
                                <Distance distanceH={10}/>
                                <View style={{flexDirection:'column'}}>
                                    <TextTitle title="REFILL GALON"/>
                                    <Distance distanceV={2}/>
                                    <Text>Rp.9000,00</Text>
                                    <Distance distanceV={15}/>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <FontAwesomeIcon icon={faMinusCircle} style={{color:'#FFC805'}} size={22}/>
                                        <View style={{width:80}}>
                                            <Text style={{borderBottomWidth:2,textAlign:'center'}}>1</Text>
                                        </View>
                                        <FontAwesomeIcon icon={faPlusCircle} style={{color:'#58B647'}} size={22}/>
                                    </View>
                                </View>
                            </View>
                            <Distance distanceV={15}/>
                        </View>
                        {/* End Section 1 */}
                        {/* Start Section 1 */}
                        <Distance distanceV={10}/>
                        <View style={styles.box}>
                            <Distance distanceV={15}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                    <Image source={require('../../assets/img/Cup220ml.png')} style={{width:123, height:100}}/>
                                </View>
                                <Distance distanceH={10}/>
                                <View style={{flexDirection:'column'}}>
                                    <TextTitle title="CUP 220 ML"/>
                                    <Distance distanceV={2}/>
                                    <Text>Rp.14000,00</Text>
                                    <Distance distanceV={15}/>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <FontAwesomeIcon icon={faMinusCircle} style={{color:'#FFC805'}} size={20}/>
                                        <View style={{width:80}}>
                                            <Text style={{borderBottomWidth:2,textAlign:'center'}}>2</Text>
                                        </View>
                                        <FontAwesomeIcon icon={faPlusCircle} style={{color:'#58B647'}} size={20}/>
                                    </View>
                                </View>
                            </View>
                            <Distance distanceV={15}/>
                        </View>
                        {/* End Section 2 */}
                        {/* Start Section 3 */}
                        <Distance distanceV={10}/>
                        <View style={styles.box}>
                            <Distance distanceV={15}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                    <Image source={require('../../assets/img/Botol330ml.png')} style={{width:123, height:100}}/>
                                </View>
                                <Distance distanceH={10}/>
                                <View style={{flexDirection:'column'}}>
                                    <TextTitle title="BOTOL 330 ML"/>
                                    <Distance distanceV={2}/>
                                    <Text>Rp.28000,00</Text>
                                    <Distance distanceV={15}/>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <FontAwesomeIcon icon={faMinusCircle} style={{color:'#FFC805'}} size={20}/>
                                        <View style={{width:80}}>
                                            <Text style={{borderBottomWidth:2,textAlign:'center'}}>1</Text>
                                        </View>
                                        <FontAwesomeIcon icon={faPlusCircle} style={{color:'#58B647'}} size={20}/>
                                    </View>
                                </View>
                            </View>
                            <Distance distanceV={15}/>
                        </View>
                        <Distance distanceV={10}/>
                        {/* End Section 3 */}
                        {/* Start Section 4 */}
                        <View style={styles.box}>
                            <Distance distanceV={15}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                    <Image source={require('../../assets/img/Botol600ml.png')} style={{width:123, height:100}}/>
                                </View>
                                <Distance distanceH={10}/>
                                <View style={{flexDirection:'column'}}>
                                    <TextTitle title="BOTOL 600 ml"/>
                                    <Distance distanceV={2}/>
                                    <Text>Rp.29000,00</Text>
                                    <Distance distanceV={15}/>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <FontAwesomeIcon icon={faMinusCircle} style={{color:'#FFC805'}} size={20}/>
                                        <View style={{width:80}}>
                                            <Text style={{borderBottomWidth:2,textAlign:'center'}}>2</Text>
                                        </View>
                                        <FontAwesomeIcon icon={faPlusCircle} style={{color:'#58B647'}} size={20}/>
                                    </View>
                                </View>
                            </View>
                            <Distance distanceV={15}/>
                        </View>
                        <Distance distanceV={15}/>
                        {/* End Section 4 */}
                        {/* Start Section 5 */}
                        <View style={styles.box}>
                            <Distance distanceV={15}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                    <Image source={require('../../assets/img/Botol1500ml.png')} style={{width:123, height:100}}/>
                                </View>
                                <Distance distanceH={10}/>
                                <View style={{flexDirection:'column'}}>
                                    <TextTitle title="BOTOL 1500 ML"/>
                                    <Distance distanceV={2}/>
                                    <Text>Rp.32000,00</Text>
                                    <Distance distanceV={15}/>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <FontAwesomeIcon icon={faMinusCircle} style={{color:'#FFC805'}} size={20}/>
                                        <View style={{width:80}}>
                                            <Text style={{borderBottomWidth:2,textAlign:'center'}}>2</Text>
                                        </View>
                                        <FontAwesomeIcon icon={faPlusCircle} style={{color:'#58B647'}} size={20}/>
                                    </View>
                                </View>
                            </View>
                            <Distance distanceV={15}/>
                        </View>
                         <Distance distanceV={15}/>
                         {/* End Section 5 */}
                         <Line/>
                         <View style={{alignItems:'center'}}>
                            <View style={{flexDirection:'row', height:50,alignItems:'center'}}>
                                <View>
                                    <TextTitle title="Total Harga"/>
                                    <Text>Rp.223.000,00</Text>
                                </View>
                                <Distance distanceH={5}/>
                                <Btn title="Pilih Agent" onPress={()=>navigation.navigate('Agent')}/>
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
export default Cart