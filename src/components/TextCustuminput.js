import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';
import Color from '../layout/colors.js';
/*import VectorIcons from 'react-native-vector-icons/AntDesign';
*/
class TextcustomInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {placeholden, secureTextEntry, keyboardType, onChangeText}  = this.props;
        var key = keyboardType;
        if(key == null){
            key = "default"
        }
        return(
            
                <View style={styles.inputtext}>
                    <TextInput style={styles.texinputcolor} 
                    placeholder={placeholden} 
                    secureTextEntry={secureTextEntry}
                    keyboardType={key}
                    onChangeText={(text) => {
                        if(onChangeText != null){
                            onChangeText(text);
                        }
                        
                    }}/>
                    
                </View>
                
          
        )
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color[Color.key]. thirtthcolor,
        alignItems: 'center',

    },
    inputtext: {
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: Color[Color.key]. maincolor,
        width: '95%',
        borderRadius: 10,
        elevation: 4,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    texinputcolor: {
        color: Color[Color.key]. fourthcolor,
    },
});
export default TextcustomInput;