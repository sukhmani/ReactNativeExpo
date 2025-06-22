

import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const projects = [
  {
    name: 'AI',
    description: 'A Streamlit app leveraging ChatGroq and TavilySearchResults to extract business insights from company and product info.',
    link: 'https://capstone-ai.streamlit.app/',
  },
  {
    name: 'Portfolio Website',
    description: 'A personal site built with React.js to highlight my skills, projects, and contact info.',
    link: 'https://sukhmani.github.io/ResumeReact/',
  },
];

export default function ProjectScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Projects</Text>
      {projects.map((project, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{project.name}</Text>
          <Text style={styles.description}>{project.description}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(project.link)}>
            <Text style={styles.link}>View Project</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f0f4ff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    color: '#333',
  },
  link: {
    fontSize: 14,
    color: '#007aff',
    textDecorationLine: 'underline',
  },
});
