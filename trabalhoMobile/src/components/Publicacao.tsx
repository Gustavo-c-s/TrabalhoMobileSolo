import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Postagem } from "./Postagem";

export const Publicacao = () => {
  return (
    <>
      <View style={styles.conteiner}>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>▦</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>🎬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>✨</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>🖼</Text>
        </TouchableOpacity>
      </View>
      <Postagem></Postagem>
    </>
  );
};
const styles = StyleSheet.create({
  bnt: {
    width:90,
    height:50,
    //backgroundColor: "#d8d8d8",
    borderColor: "#020202",
    borderBottomWidth: 2,    
    margin:5,
    justifyContent:'center'
},
text: {
    textAlign: "center",
    fontSize:25
  },
  conteiner: {
    flexDirection: "row",
    width: '100%',
    backgroundColor: "",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
