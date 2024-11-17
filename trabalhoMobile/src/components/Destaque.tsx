import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Destaque = () => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={styles.bnt}>
        <Text style={styles.text}>➕</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Destaque</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bnt: {
   
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#d8d8d8",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#020202",
  },
  text: {
    textAlign: "center",
  },
  conteiner: {
    width: 100,
    backgroundColor: "",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
