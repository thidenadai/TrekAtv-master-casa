import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
  },

  header: {
    height: "10%", // Define a altura do HEADER
    backgroundColor: "#54b53f", // Define a cor de fundo
    justifyContent: "center"
  },

  img: {
    width: 300,
    height: 300,
    margin: 30,
    marginBottom: 5,
    borderRadius: 10,
  },
  body: {
    flex:1,
    
  },

  txtImg: {
    fontStyle: "italic",
    fontSize: 20, // Define o tamanho da fonte
  },
  txtHeader: {
    fontSize: 28, // Define o tamanho da fonte
   
    fontStyle: "italic",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#54b53f",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 1,
    height: 40,
    width: 150,
    borderRadius: 10,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100", // Define a altura do componente Footer
    backgroundColor: "#54b53f", // Define a cor de fundo
  },
  slogan: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },

  imgsconteudo: {
    width: 300,
    height: 300,
    margin: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  algconteudo: {
    alignItems: "center",
    justifyContent: "center",
  },
  tituloiporanga: {
    alignItems: "center",
    backgroundColor: "#54b53f",
  },
  txt_titulocidade: {
    fontSize: 25,
    margin: 10,
  },
  txtconteudo: {
    margin: 15,
    textAlign: "justify",
    borderBottomColor:"black",
    borderBottomWidth: 1,
  },
  txt_introduçaocidade:{
    textAlign: "center",
    fontSize: 18,
    margin: 5,
    borderBottomWidth:"black",
    borderBottomWidth: 1,    
    width: 300,
    borderRadius: 10,
    backgroundColor:"#edf0ee"

    
  },
  
});
