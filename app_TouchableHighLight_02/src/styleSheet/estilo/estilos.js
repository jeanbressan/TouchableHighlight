import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  cabecalho: {
    backgroundColor: "#ffffff",
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  conteudo: {
    minHeight: 400,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  enunciado: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 15,
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 15,
  },
  rodape: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  nomeAutor: {
    fontSize: 13,
    color: "#333",
    fontWeight: "600",
  },
  data: {
    fontSize: 13,
    color: "#333",
    fontWeight: "600",
  },
});

export { estilos };