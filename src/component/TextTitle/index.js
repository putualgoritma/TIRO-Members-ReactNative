import * as React from 'react' ;
import{
    StyleSheet,
    Text
}from 'react-native';

const TextTitle = (props)=>{
    return(
        <Text style={styles.text}>{props.title}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:16,
        fontWeight:'bold'
    },
});
export default TextTitle