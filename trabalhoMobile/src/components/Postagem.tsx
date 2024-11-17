import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export const Postagem = () => {
  const fotos = [
    {
      id: "1",
      uri: "https://static.vecteezy.com/ti/fotos-gratis/t2/6026259-tranquilo-verao-ferias-ferias-paisagem-tropical-ilha-por-do-sol-praia-palms-shore-calmo-mar-areia-exotico-natureza-cenario-inspirador-e-pacifico-paisagem-marinha-reflexo-ceu-por-do-sol-foto.jpg",
    },
    {
      id: "2",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jxxdWOf4iEuaW71-eFkLqcMAQbwUWFxD3A&s",
    },
    {
      id: "3",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptkTqhJ9fAa3c6yRrabudzYWERGRKoXmYIw&s",
    },
    {
      id: "4",
      uri: "https://fazfacil.com.br/wp-content/uploads/2022/02/20220203-dont-be-clueless-how-to-host-a-90s-theme-party-in-2022.jpg",
    },
    {
      id: "5",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89e_xxlYSyafw7ePbJLPnl0f5WuQi1YtTbQ&s",
    },
  ];

  return (
    <ScrollView>
      <View style={style.container}>
        {fotos.map((foto) => (
          <TouchableOpacity>
            <Image key={foto.id} source={{ uri: foto.uri }} style={style.box} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    margin: 1,
    height: 140,
    width: 135,
    //backgroundColor: "#f80000",
  },
});
