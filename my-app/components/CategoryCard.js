import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function CategoryCard({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: 'row', margin: 8, backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' },
  image: { width: 80, height: 80 },
  content: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8 },
  text: { fontSize: 18, fontWeight: '600' }
});
