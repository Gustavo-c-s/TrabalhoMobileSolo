import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Pe = () => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={styles.bnt}>
        <Text style={styles.text}>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bnt}>
        <Text style={styles.text}>🔍</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bnt}>
        <Text style={styles.text}>➕</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bnt}>
        <Text style={styles.text}>🎬</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bnt}>
       <Image source={require("../../assets/gus.jpg")} style={styles.perfil} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bnt: {
    width: 90,
    height: 50,
    //backgroundColor: "#d8d8d8",

    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  conteiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  perfil: {
    width: 35,
    height: 35,
    borderRadius: 100,
    borderColor: "#020202",
    borderWidth:2
  },
});
