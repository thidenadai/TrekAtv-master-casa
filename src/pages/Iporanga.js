import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../styles/Style";

export default function Iporanga() {
  const imgsantana = {
    uri: "https://imagedelivery.net/EafvxYlk8cSUsWEWsetEdQ/4d9496bf-b31d-4ecb-a29c-66590363c500/w=1000",
  };
  const casadepedra = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Parque_Estadual_Tur%C3%ADstico_do_Alto_Ribeira_Thomas-Fuhrmann_%2803%29.jpg/1200px-Parque_Estadual_Tur%C3%ADstico_do_Alto_Ribeira_Thomas-Fuhrmann_%2803%29.jpg",
  };
  const imgcavernadodiabo = {
    uri: "https://www.aventurasp.com.br/imagens/carousel-caverna-do-diabo-01.jpg",
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tituloiporanga}>
          <Text style={styles.txt_titulocidade}>BEM-VINDO A IPORANGA!</Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={imgsantana} />
          <Text>Caverna de santana:</Text>
          <Text style={styles.txtconteudo}>
            É a segunda maior caverna do estado, um passeio perfeito para
            amantes de aventuras; {"\n"}
            Horário: terça a domingo das 09:00 às 15:00; {"\n"}
            Localização: Parque Estadual Turístico Alto do Ribeira - PETAR;
            {"\n"}
            Entrada: 15,00 reais por pessoa mais o guia turístico vária depende
            o passeio escolhido - precisa de agendamento prévio;
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={casadepedra} />
          <Text>Casa de Pedra:</Text>
          <Text style={styles.txtconteudo}>
            A caverna possui uma entrada de 215m e é considerada o maior pórtico
            de caverna do mundo, estando, inclusive, no “Guinness Book”, porém
            não é permitido a entrada do público em geral, somente de
            pesquisadores e biólogos;{"\n"} Horário: terça a domingo das 08:00
            às 17:00;{"\n"}
            Localização: Parque Estadual turístico Alto do Ribeira - PETAR;
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={imgcavernadodiabo} />
          <Text>Caverna do diabo:</Text>
          <Text style={styles.txtconteudo}>
            O atrativo é uma caverna com mais de 6.000 metros de extensão, mas
            apenas 600 metros são abertos a visitação.{"\n"}
            Horário: terça a domingo das 08:00 às 17:00. {"\n"}
            Localização: Parque Estadual Turístico Alto do Ribeira - PETAR;
            {"\n"}Entrada: 19,00 reais por pessoa - precisa de agendamento
            prévio;
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image
            style={styles.imgsconteudo}
            source={require("../assets/images/imgboiacross.jpeg")}
          />
          <Text>Boia Cross:</Text>
          <Text style={styles.txtconteudo}>
            O esporte ocorre no Rio Betari e seus afluentes, perfeito para
            amantes de aventuras; {"\n"}
            Horário: terça a domingo das 08:00 às 17:00; {"\n"}
            Localização: Parque Estadual turístico Alto do Ribeira - PETAR;
            {"\n"}
            Entrada vária dependendo da empresa contratada (entre 30 a 100 reais
            por pessoa); É indicado fazer o agendamento prévio;
          </Text>
        </View>
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
}
