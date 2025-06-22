

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HobbiesScreen() {
  const hobbies = ['Coding', 'Hiking', 'Reading', 'Traveling'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hobbies and Interests</Text>
      <View style={styles.list}>
        {hobbies.map((hobby, index) => (
          <Text key={index} style={styles.item}>• {hobby}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingLeft: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});
