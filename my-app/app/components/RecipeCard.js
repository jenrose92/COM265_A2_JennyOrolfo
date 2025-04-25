import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function RecipeCard({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: { padding: 16, margin: 8, backgroundColor: '#eee', borderRadius: 8 },
  text: { fontSize: 16 }
});