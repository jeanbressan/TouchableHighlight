import React from "react";
import { View, Image, Text } from 'react-native';
import Cabecalho from "./src/componentes/Cabecalho";
import Conteudo from "./src/componentes/Corpo";
import { estilos } from "./src/styleSheet/estilo/estilos";

function App() {
  return (
    <View style={estilos.fundo}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}

export default App;