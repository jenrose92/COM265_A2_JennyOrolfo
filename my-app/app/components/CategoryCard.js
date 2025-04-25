import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function CategoryCard({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.thumb} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: 'row', margin: 8, backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' },
  thumb: { width: 80, height: 80 },
  textWrap: { flex: 1, padding: 8, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '600' }
});
