import React from 'react'
import {Text,View,StyleSheet,ScrollView,Image}from 'react-native';
import {Title,Btn} from '../../component';
import Distance from '../../utils/distance';

const Agent=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'#E5E5E5',height:300, width:'100%'}}>

            </View>
            <Distance distanceV={10}/>
            <Title title='Pilih Agent'/>
            <Distance distanceV={10}/>
            <ScrollView>
                <View style={{alignItems:'center'}}>
                {/* Start Section 1 */}
                <View style={{flexDirection:'row',backgroundColor:'#F2F2F2', height:200, width:'90%', borderWidth:3,borderColor:'#E5E5E5'}}>
                    <View style={{flex:0.7}}>
                        <Image source={require('../../assets/img/Agent.png')} style={{width:135, height:190}}/>
                    </View>
                    <View style={{flex:1, paddingHorizontal:5}}>
                        <Image source={require('../../assets/img/AgentFooter.png')} style={{width:90, height:90, position:'absolute', bottom:0,right:0}}/>
                        <View style={{flexDirection:'column',justifyContent:'center',flex:1}}>
                            <View style={styles.boxInput}>
                                <Text>Agen TIRO</Text>
                            </View>
                            <Distance distanceV={5}/>
                            <View style={styles.boxInput}>
                                <Text>TiroAirKesehatan@gmail.com</Text>
                            </View>
                            <Distance distanceV={5}/>
                            <View style={styles.boxInput}>
                                <Text>036136028000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* End Section 1 */}
                <Distance distanceV={10}/>
                {/* Start Section 2 */}
                <View style={{flexDirection:'row',backgroundColor:'#F2F2F2', height:200, width:'90%', borderWidth:3,borderColor:'#E5E5E5'}}>
                    <View style={{flex:0.7}}>
                        <Image source={require('../../assets/img/Agent.png')} style={{width:135, height:190}}/>
                    </View>
                    <View style={{flex:1, paddingHorizontal:5}}>
                        <Image source={require('../../assets/img/AgentFooter.png')} style={{width:90, height:90, position:'absolute', bottom:0,right:0}}/>
                        <View style={{flexDirection:'column',justifyContent:'center',flex:1}}>
                            <View style={styles.boxInput}>
                                <Text>Agen TIRO</Text>
                            </View>
                            <Distance distanceV={5}/>
                            <View style={styles.boxInput}>
                                <Text>TiroAirKesehatan@gmail.com</Text>
                            </View>
                            <Distance distanceV={5}/>
                            <View style={styles.boxInput}>
                                <Text>036136028000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Distance distanceV={20}/>
                {/* End Section 2 */}
                    
                </View>
            </ScrollView>
            <View style={{alignItems:'center'}}>
                <Btn title="Pilih Agent" onPress={()=>navigation.navigate('CompleteOrder')}/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    boxInput :{
        backgroundColor:'white', 
        width:'100%', 
        height:40,
        opacity:0.9, 
        justifyContent:'center', 
        paddingHorizontal:5
    }
})
export default Agent