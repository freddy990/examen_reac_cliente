import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';
import Color from '../layout/colors.js';
import TextCustomInput from '../components/TextCustuminput.js';
import CustomButtons from '../components/CustomButtons.js';
/*import VectorIcons from 'react-native-vector-icons/AntDesign';
*/
class CreateClientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            celular: '',
            password: null,
            repassword: null,
        };
    }
    componentDidMount(){}
        
        registerData(){
            console.log(this.state);
        }
    
    render(){
        return(
            <View style={styles.container}>
             <TextCustomInput placeholden="Nombre de cliente" 
             onChangeText={(txt) => {
                 this.setState({
                     name: txt,
                 });
             }}/>
             <TextCustomInput placeholden="Apellido del cliente"
             onChangeText={(txt) => {
                this.setState({
                    lastname: txt,
                });
            }}/>
             
             <TextCustomInput placeholden="Celular de cliente" keyboardType="numeric"
             onChangeText={(txt) => {
                this.setState({
                    celular: txt,
                });
            }}/>
             <TextCustomInput placeholden="password" secureTextEntry={true}
             onChangeText={(txt) => {
                this.setState({
                    password: txt,
                });
            }}/>
             <TextCustomInput placeholden="password confirmation" secureTextEntry={true}
             onChangeText={(txt) => {
                this.setState({
                    repassword: txt,
                });
            }}/>
             <CustomButtons title="Crear cliente" onPress={() => {
                 this.registerData();
             }} />

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
    
});
export default CreateClientes;