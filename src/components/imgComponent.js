import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Img({ caminhoImg, txt, txtConteudo,nameFunction, nomecidade }) {
  const [visible, setVisible] = useState(false);
  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };
const navigation= useNavigation();
  return (
    <View style={styles.algconteudo}>
      <Image style={styles.img} source={caminhoImg} />
      <TouchableOpacity  style={styles.button} onPress={() =>{ visModal(true); navigation.navigate(nameFunction) }}>
        <Text style={styles.txtImg}>{txt}</Text>
      </TouchableOpacity>
      <Text style={styles.txt_introduçaocidade}> {nomecidade}</Text>
    </View>
  );
}
