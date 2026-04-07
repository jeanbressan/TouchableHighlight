import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from '../styleSheet/estilo/estilos';

function Cabecalho() {
  let img_logo = require('../styleSheet/img/logoCode.jpeg');
  return (
    <View style={estilos.cabecalho}>
      <Image
        source={img_logo}
        style={{
          width: 200,
          height: 100,
          resizeMode: 'repeat',
          borderWidth: 3,
          marginTop: 20
        }}
      />
      <Text style={estilos.subtitulo}>Desenvolvimento Code Journey</Text>
    </View>
  );
}

export default Cabecalho;