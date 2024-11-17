import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Perfil } from "./src/components/Perfil";
import { Cabeca } from "./src/components/Cabeca";
import { Pe } from "./src/components/Pe";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/insta.jpeg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Cabeca></Cabeca>
        <Perfil></Perfil>
        <Pe></Pe>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  background: { flex: 1, resizeMode: "cover" }, // ou 'contain' },
});
