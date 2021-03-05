import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
/*import VectorIcons from 'react-native-vector-icons/AntDesign';
*/
import Color from './layout/colors.js';
import CreateClientes from './views/CreateCliente.js';
import ListClientes from './views/ListClientes.js';

const Tab = createBottomTabNavigator();
class App extends React.Component{
  constructor(props){
    super(props);
  }
  ListClientes(){
    return (
     <ListClientes/>
    )
  }
  CreateClientes(){
    return (
     <CreateClientes/>
    )
  }
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator color={Color.option2.thirtthcolor}>
          <Tab.Screen name = "Lista De Clientes" component = {this.ListClientes} />

          <Tab.Screen name = "Crear Cliente" component = {this.CreateClientes} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;

