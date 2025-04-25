import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enable Dark Mode</Text>
      <Switch value={isEnabled} onValueChange={setIsEnabled} />
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:16 }, label: { fontSize:18 } });
