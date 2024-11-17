import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Cabeca = () => {
  return (
    <View style={styles.container}>
      <View style={styles.c}>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.t}>🔒gugaacordeiro</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.c}>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>@</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>Ξ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  c: {
    flexDirection: "row",
  },
  bnt: {
    height: "auto",
    //backgroundColor: "#d8d8d8",
    marginRight: 10,
  },
  text: {
    //alignItems:"center",
    margin: 5,
    fontSize: 25,
  },
  t: {
    margin: 5,
    fontSize:20,
    fontWeight: "bold",
  },
});
