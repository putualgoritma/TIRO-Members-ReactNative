import * as React from 'react' ;
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';
import {faCommentDots,faHome,faShoppingCart,faUser,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const Footer = (props) =>{
    return(
        <View style={styles.container}>
            <View style={styles.section} >
                <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Home')}>
                    <FontAwesomeIcon icon={faHome} style={{color:'#026BED'}} size={ 27 } color = {props.focus === 'Home' ? '#70B812' : ''} />
                    <Text style={styles.text} >Beranda</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section} >
                <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Cart')} >
                    <FontAwesomeIcon icon={faShoppingCart} style={{color:'#026BED'}} size={ 27 } color = {props.focus === 'Cart' ? '#70B812' : ''} />
                    <Text style={styles.text} >Keranjang</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section} >
                <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Chat')}>
                    <FontAwesomeIcon icon={faCommentDots} style={{color:'#026BED'}} size={ 27 }  color = {props.focus === 'Chat' ? '#70B812' : ''} />
                    <Text style={styles.text} >Bantuan</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section} >
                <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Profile')}>
                    <FontAwesomeIcon icon={faUser} style={{color:'#026BED'}} size={ 27 }  color = {props.focus === 'Profile' ? '#70B812' : ''} />
                    <Text style={styles.text} >Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
    },
    section:{
        flex:1,
        backgroundColor:'#ffffff',
        height:58,
    },
    icon:{
        alignItems:'center',
        padding:5,
    },
    text:{
        color:'#163F5F',
        fontSize:16,
        textAlign:'center'
    }
});
export default Footer