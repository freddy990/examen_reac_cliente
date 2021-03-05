import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Color from '../layout/colors.js';
class CustomButtons extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {title, onPress} = this.props;
        var icon = iconname;
        if(icon == null){
            icon = 'falta';
        }
        return(
            <TouchableOpacity style={styles.btnstyles} onPress={() =>{
                onPress();
            }}>
            <Text style={styles.txt}>
                {title}
            </Text>
            </TouchableOpacity>
        )
        
    }
}
const styles = StyleSheet.create({
    btnstyles:{
        backgroundColor: Color[Color.key]. fourthcolor,
        flexDirection: 'row',
        padding: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
    color:  Color[Color.key]. secondcolor,
    marginLeft: 15,
    },
});
export default CustomButtons;