import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../styles/Style";

export default function Analândia() {
  const morrodocuscuzeiro = {
    uri: "https://lh3.googleusercontent.com/p/AF1QipMmi1HdDj58hckyP7rEqjaFF-Rw_B0DdzyOgAKG=s680-w680-h510",
  };
  const cachoeiradabocaina = {
    uri: "https://aeanalandia.com.br/wp-content/uploads/2020/02/5963564531_32049bb5c3_b.jpg",
  };
  const cachoeirradoescorrega = {
    uri: "https://i0.wp.com/geoparkcorumbatai.com.br/wp-content/uploads/2023/01/image-4.png?fit=940%2C940&ssl=1",
  };
  const Cachoeiraegrutadoindio = {
    uri: "https://aeanalandia.com.br/wp-content/uploads/2020/02/caverna-analandia-a-bussola-quebrada.jpg",
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tituloiporanga}>
          <Text style={styles.txt_titulocidade}>BEM-VINDO A ANALÂNDIA!</Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={morrodocuscuzeiro} />
          <Text>Morro do Cuscuzeiro:</Text>
          <Text style={styles.txtconteudo}>
            Esse morro é um dos mais conhecidos de Analândia Através de uma
            trilha você chega ao topo do morro e pode ver a vista espetacular
            que ele proporciona. {"\n"}
            Aberto 24 horas {"\n"}
            Localização: Estrada Orlando Tendolini {"\n"}
            Não precisa pagar
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={cachoeiradabocaina} />
          <Text>Cachoeira da Bocaina:</Text>
          <Text style={styles.txtconteudo}>
            Cachoeira com 45m de queda d’ água, com uma vista incrível da parte
            de cima. É necessário fazer uma trilha até a parte de cima mas a
            vista vale a pena {"\n"} Localização: Estrada da Serra {"\n"}{" "}
            Horário: aberto 24 horas {"\n"}
            Entrada gratuita
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={cachoeirradoescorrega} />
          <Text>Cachoeirra do Escorrega:</Text>
          <Text style={styles.txtconteudo}>
            Cachoeira perfeito para passar o dia com a família, local limpo com
            lixeiras e espaço kids e restaurantes {"\n"}
            Localização: Estrada Municipal ALD 030 Rural {"\n"}
            Horário: quinta a domingo das 07:00 às 17:00 {"\n"}
            Entrada: 10,00 reais por pessoa
          </Text>
        </View>
        <View style={styles.algconteudo}>
          <Image style={styles.imgsconteudo} source={Cachoeiraegrutadoindio} />
          <Text>Cachoeira e Gruta do Índio:</Text>
          <Text style={styles.txtconteudo}>
            Cachoeira linda e pra quem gosta de aventura A gruta tem artes
            rupestre de 5mil anos atrás {"\n"}
            Horário: de segunda á sábado das 08:00 às 17:00 {"\n"}
            Entrada: 07 reais por pessoa - precisa de agendamento prévio
          </Text>
        </View>
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
}
