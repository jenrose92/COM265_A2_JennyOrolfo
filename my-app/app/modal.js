import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AboutModal() {
  const router = useRouter();
  return (
    <View style={styles.center}>
      <Text style={styles.heading}>Recipe Viewer</Text>
      <Text style={styles.body}>Browse meals by category, view details, and save favorites.</Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({ center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }, heading: { fontSize: 24, marginBottom: 8 }, body: { fontSize: 16, textAlign: 'center', marginBottom: 16 } });
