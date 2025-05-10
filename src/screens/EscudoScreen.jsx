import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function ConfigScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time: {time.nome}</Text>
      <Text>Fundado em: {time.fundacao}</Text>
      <Text>Estádio: {time.estadio}</Text>
      <Text>Mascote: {time.mascote}</Text>
      <Text>Cores do uniforme: {time.cores.join(" e ")}</Text>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  escudo: {
    width: 100,
    height: 100,
    marginTop: 12
  }
});
