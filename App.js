import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerNavigator} from './Navigators/DrawerNavigator.js';


import LoginScreen from "./Screens/LoginScreen";
import MainScreen from "./Screens/MainScreen";


export default class App extends Component {

  /*constructor(props){
    super(props);
    this.state = {isLoggedIn:false}
}

setLogin(){
    this.setState({isLoggedIn:true});
}

setLogout(){
    this.setState({isLoggedIn:false});
}

render(){

    let screen;
    if(this.state.isLoggedIn){
        screen = <MainScreen onLogout={() => this.setLogout()}/>
    } else {
        screen = <LoginScreen onLogin={() => this.setLogin()}/>
    }

    return screen;

}*/

  
  render(){

    return (

      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
