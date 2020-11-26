import React, {Component} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet} from "react-native";
import { Icon } from 'react-native-elements'
import { color } from 'react-native-reanimated';

export class DrawerContentScreen extends Component {


    handlerLogout(){
        console.log("Salir");
        this.handlerLogout.exitApp();
        
    }

    render(){

        return(

            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="home-outline" style={styles.icon}/>}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                    </View>
                    
                </DrawerContentScrollView>

                <View style={styles.bottomDrawer}>
                    <DrawerItem 
                        icon={() => <Icon type="material-community" name="logout" style={styles.icon}/>}
                        label="Logout"
                        onPress={() => this.handlerLogout()}
                    />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        color:'#517fa4'
    },
    topDrawer:{
        flex:1   
    },
    bottomDrawer: {
        flex:-1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
});