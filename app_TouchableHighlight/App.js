import React from "react";
import { View, Image, Text } from 'react-native';
import Cabecalho from "./src/Componentes/Cabecalho";
import Conteudo from "./src/Componentes/Corpo";
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