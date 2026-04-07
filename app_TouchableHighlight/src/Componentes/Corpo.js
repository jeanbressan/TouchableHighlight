import React from "react";
import { View, Text, TouchableHighlight } from 'react-native';
import { estilos } from "../styleSheet/estilo/estilos";

function mostra_msg(){
  alert('Hello World!');
}

function Conteudo(){
  return(
    <View style={estilos.conteudo}>
      <Text style={estilos.titulo}>Componente TouchableHighlight</Text>
      <TouchableHighlight
        onPress={mostra_msg}
        style={{backgroundColor:'darkred', padding:20,
        borderRadius:25}}
      >
        <Text style={{color:'white', fontWeight:'bold'}}>CLIQUE AQUI</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Conteudo;