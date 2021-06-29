import * as React from 'react' ;
import{
    StyleSheet,
    Text,
    View
}from 'react-native';

const Title = (props)=>{
    return(
        <View style={{alignItems:'center'}}>
            <View style={{width:'90%'}}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
});
export default Title