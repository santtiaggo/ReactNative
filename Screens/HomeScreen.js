import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
        this.setState({personaje: data.results[10], loading: true})
      }    

    render(){
        return(
            
            <div>
      {this.state.loading || !this.state.personaje ? (
        
      <div align = 'center'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick = {this.handlerClick} style = {{ fontStyle: 'Roboto', width: '20%', height: '3em', borderWidth: 1, borderRadius: 20, backgroundColor: 'black', color: 'white'}}> Obtener personaje Random </button>
        </div>
      ) : (
      <div align = 'center'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style = {{border: '1em' , width: '20%', borderRadius: 20, backgroundColor: '#222221'}}> 
        <div style = {{ fontSize: 18, fontStyle: 'arial', color: "white"}}>{this.state.personaje.id}</div>
      <div style = {{ fontSize: 20, fontStyle: 'roboto', color: "white"}}>{this.state.personaje.name}</div> 
      <div style = {{ fontSize: 20, fontStyle: 'roboto', color: "white"}}>{this.state.personaje.status}</div>
        <div style = {{ fontSize: 20, fontStyle: 'roboto', color: "white"}}>{this.state.personaje.species}</div>
        <br></br>
        <img style = {{borderRadius: 10}} src={this.state.personaje.image} />
        </div>
      </div>
      )}
      <br></br>
      <br></br>
    </div>
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
      backgroundColor: '#f0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
