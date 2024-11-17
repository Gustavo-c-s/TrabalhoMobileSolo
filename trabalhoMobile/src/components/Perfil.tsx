import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Destaque } from "./Destaque";
import { Publicacao } from "./Publicacao";

export const Perfil = () => {
  return (
    <>
      <View style={styles.part1}>
        <Image source={require("../../assets/gus.jpg")} style={styles.perfil} />
        <TouchableOpacity>
          <Text style={styles.text}>49</Text>
          <Text>publicações</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>717</Text>
          <Text>seguidores</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>1.386</Text>
          <Text>segundo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.part2}>
        <Text style={styles.nome}>Gustavo Santos</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero
          odit porro ducimus ab animi sint ipsam modi natus quos maxime,
          obcaecati optio suscipit nisi vel quis tenetur, officiis impedit.
        </Text>
      </View>
      <View style={styles.part3}>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.text}>Compartilhar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.text}>🙋‍♂️</Text>
        </TouchableOpacity>
      </View>
      <Destaque></Destaque>
      
    </>
  );
};

const styles = StyleSheet.create({
  part1: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  part2:{
    marginLeft: 20,
  },
  part3: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  perfil: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  nome:{
    fontWeight:"bold"
  },
  bnt: {
    width:160,
    height:40,
    backgroundColor: "#dfdede",
    borderRadius: 10,
    justifyContent:"center"
  },
  text: {
    textAlign: "center",
  },
  icon:{
    width:40,
    height:40,
    backgroundColor: "#dfdede",
    borderRadius: 10,
    justifyContent:"center"
  }
});
