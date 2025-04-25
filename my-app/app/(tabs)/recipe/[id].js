import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, Text, Button, TextInput, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchRecipeById } from '../../../api/mealsApi';
import { useSearchParams } from 'expo-router';
import { FavoritesContext } from '../../../context/FavoritesContext';
export default function RecipeDetail() {
  const { id } = useSearchParams();
  const [meal, setMeal] = useState(null);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  useEffect(() => { fetchRecipeById(id).then(res => setMeal(res.data.meals[0])); }, [id]);
  if (!meal) return <ActivityIndicator size="large" />;
  const isFav = favorites.some(r => r.idMeal === id);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <TextInput style={styles.input} placeholder="Add a note..." />
      <Text style={styles.instructions}>{meal.strInstructions}</Text>
      <Button
        title={isFav ? 'Remove Favorite' : 'Add to Favorites'}
        onPress={() => isFav ? removeFavorite(id) : addFavorite(meal)}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  image: { width: '100%', height: 200, borderRadius: 8, marginVertical: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 8, marginBottom: 16 },
  instructions: { marginBottom: 16 }
});
