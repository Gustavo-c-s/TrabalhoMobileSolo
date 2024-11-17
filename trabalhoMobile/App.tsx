import { ImageBackground, StyleSheet, View } from "react-native";
import { Perfil } from "./src/components/Perfil";
import { Cabeca } from "./src/components/Cabeca";
import { Pe } from "./src/components/Pe";
import { Publicacao } from "./src/components/Publicacao";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabeça}>
        <Cabeca></Cabeca>
      </View>
      <View style={styles.perfil}>
        <Perfil></Perfil>
      </View>
      <View style={styles.publicacao}>
        <Publicacao></Publicacao>
      </View>
      <View style={styles.pe}>
        <Pe></Pe>
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  publicacao:{
    flex:1
  },
  

});
