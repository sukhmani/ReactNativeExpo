

import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./Sukhmani.png')} style={styles.avatar} />
      <Text style={styles.name}>Sukhmani Thukral</Text>
      <Text style={styles.bio}>Software Developer from Seattle, WA.</Text>

      <TouchableOpacity onPress={() => Linking.openURL('mailto:thukralsukhmani@cityuniversity.edu')}>
        <Text style={styles.link}>Email: thukralsukhmani@cityuniversity.edu</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('tel:12062258829')}>
        <Text style={styles.link}>Phone: (206) 225-8829</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/sukhmani-thukral/')}>
        <Text style={styles.link}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/sukhmani/ResumeReact')}>
        <Text style={styles.link}>GitHub</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
  },
  bio: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'center',
  },
  link: {
    fontSize: 14,
    color: '#007aff',
    marginTop: 6,
  },
});



