import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
  }
];

export default function TituloScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Títulos do Flamengo</Text>

      {titulos.map((titulo, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.nome}>{titulo.nome}:</Text>
          <Text style={styles.anos}>{titulo.anos.join(', ')}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center'
  },
  card: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: '100%'
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4
  },
  anos: {
    fontSize: 14,
    color: '#333'
  }
});
