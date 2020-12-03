import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ButtonWithBackground from '../src/ButtonWithBackground';



export class HomeScreen extends Component {



    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
      }
      
      state = {
        personaje: false,
        handlerClick : false,
        
      };
      
      async componentDidMount() {
        const url = 'https://rickandmortyapi.com/api/character/';
        const response = await fetch(url);
        const data = await response.json();

        
          this.setState({personaje: data.results[this.getRandomInt(20)], loading: true}) 
        

       
      }  
       getRandomInt(max) {   
        return Math.floor(Math.random() * Math.floor(max)); 
      }  

    render(){
        return(
            
          <View>
      {this.state.loading || !this.state.personaje ? (
        
        <Text style={styles.container}>
       
        <Button
          onPress={this.handlerClick}
          title="Buscar personaje"
          color="#f0f"
        />
       
        </Text>
        
      )  : (
        <Text style={styles.contenedor}>
      
       
        <Text style={styles.container}>
          {"Personaje: " + this.state.personaje.id}
        </Text>
        <br></br>
        <Text style={styles.container}>
          {this.state.personaje.name}
        </Text>
        <br></br>
        <Text style={styles.container}>
          {this.state.personaje.status}
        </Text>
        <br></br>
        <Text style={styles.container}>
          {this.state.personaje.species}
        </Text>
        <br></br>
        <Image  style={styles.contenedor} source={this.state.personaje.image} />
       
        </Text>
      
      
      )}
      
      
      </View>
        );
        
    }

    handlerClick() {
        this.setState({
          loading : false
        })
      }
    
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 100,
    },
    contenedor: {
      backgroundColor: 'green',
      textAlign: 'center',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 100,
    }
  });

 



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
