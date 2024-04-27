import { View, Text, FlatList, ImageComponent } from "react-native";
import { styles } from "../styles/Style";
import Img from "../components/imgComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function Home() {
  const img2 = {
    uri: "https://static.wixstatic.com/media/d36dac_eebb6ab0d25b470aac70acf2b53baeb8~mv2.jpg/v1/fill/w_925,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d36dac_eebb6ab0d25b470aac70acf2b53baeb8~mv2.jpg",
  };
  const img3 = {
    uri: "https://live.staticflickr.com/65535/53474246696_cc34de2af0_b.jpg",
  };
  const img4 = {
    uri: "https://www.trilhaseaventuras.com.br/wp-content/uploads/2014/02/ilhabela-sp-7.jpg",
  };
  const img6 = {
    uri: "https://serradoitaqueri.com.br/wp-content/uploads/2018/11/serra-do-itaqueri-morro-do-camelo-analandia.jpg",
  };

  const dados = [
    {
      id: "1",
      component: <Img caminhoImg={img2} txt="Holambra-SP" nameFunction={"Holambra"} nomecidade={"A cidade é encantadora, fica a 120km de São Paulo, conhecida como cidade das flores, foi fundada por imigrantes holandeses e seu nome vem da junção Holanda, América e Brasil !"} />,
    },
    {
      id: "2",
      component: <Img caminhoImg={img6} txt="Analândia" nameFunction={"Analândia"} nomecidade={" Famosa por suas belezas naturais, como cachoeiras, cascatas, morros e suas paisagens espetaculares, a cidade fica na Serra do Itaqueri. Analândia significa Terra da Ana, do germânico 'land' que significa terra !"} />,
    },
    { id: "3", component: <Img caminhoImg={img3} txt="Iporanga-SP" nameFunction={"Iporanga"} nomecidade={" Famosa por suas cavernas naturais, Iporanga é o município brasileiro com maior número de cavernas e possui um portal de cerca de 216 metros de altura e é considerada a caverna com o maior pórtico do mundo. A cidade fica localizada na região do Vale do Ribeira, seu nome vem da origem tupi que significa 'rio bonito' ! "} /> },
    { id: "4", component: <Img caminhoImg={img4} txt="Ilhabela-SP" nameFunction={"Ilhabela"}nomecidade={" As condições de vento e mar do canal de São Sebastião fizeram Ilhabela ficar conhecida como a capital da vela. Diversas competições trazem velejadores do Brasil e de diversas partes do mundo. O nome Ilhabela foi dado por Américo Vespúcio que descobriu esse arquipélago, o explorador disse que o destino poderia ser o mais próximo de qualquer paraíso na terra"} /> },
    
  ];

  const rdItem = ({ item }) => {
    return item.component;
  };

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Trek Trek Turismo</Text>
      </View>
      <View style={styles.body}>
      <FlatList
        data={dados} // Ele está recebendo todos os objetos do nosso array data
        renderItem={rdItem} // Chama a função para renderizar as Views box
        keyExtractor={(dados) => dados.id} // Extrair o id do objeto
            
        />
        </View>
      <View style={styles.footer}>
        <Text style={{fontSize: 15, fontStyle: "italic",}}>Conectando você ao seu próximo destino.</Text>
      </View>
    </View>
  );
}
