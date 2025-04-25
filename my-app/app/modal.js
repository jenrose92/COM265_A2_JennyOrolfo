import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function AboutModal() {
  const router = useRouter();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Recipe Viewer</Text>
      <Text style={styles.subtitle}>Browse meals, view details & save favorites.</Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}
const styles = StyleSheet.create({ wrapper: { flex:1, justifyContent:'center', alignItems:'center', padding:16 }, title:{ fontSize:24, marginBottom:8 }, subtitle:{ fontSize:16, textAlign:'center', marginBottom:16 } });

//