import { Link } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Link href="/profile" style={styles.link}>Profile</Link>
      <Link href="/resume" style={styles.link}>Resume</Link>
      <Link href="/project" style={styles.link}>Project</Link>
      <Link href="/hobbies" style={styles.link}>Hobbies</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
  },
  link: {
    fontSize: 18,
    color: '#007aff',
    marginVertical: 8,
    textDecorationLine: 'underline',
  },
});
