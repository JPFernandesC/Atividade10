import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    posicao: "Atacante",
    idade: 27,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    posicao: "Meia",
    idade: 29,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    posicao: "Meia",
    idade: 33,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
  },
  {
    nome: "David Luiz",
    numero: 23,
    posicao: "Zagueiro",
    idade: 35,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
  },
  {
    nome: "Pedro",
    numero: 21,
    posicao: "Atacante",
    idade: 26,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
  }
];

export default function JogadorScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jogadores do Flamengo</Text>

      {jogadores.map((jogador, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: jogador.imagem }} style={styles.imagem} />
          <Text style={styles.nome}>{jogador.nome}</Text>
          <Text>Posição: {jogador.posicao}</Text>
          <Text>Número: {jogador.numero}</Text>
          <Text>Idade: {jogador.idade}</Text>
        </View>
      ))}

      <Button
        mode='contained'
        onPress={() => navigation.openDrawer()}
        style={styles.botao}
      >
        Abrir gaveta
      </Button>

      <Button
        mode='contained-tonal'
        onPress={() => {
          navigation.openDrawer();
          setTimeout(() => navigation.closeDrawer(), 3000);
        }}
        style={styles.botao}
      >
        Abrir e fechar automaticamente
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 10,
    width: '90%',
    elevation: 2,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botao: {
    marginVertical: 8,
    width: '80%',
  },
});
