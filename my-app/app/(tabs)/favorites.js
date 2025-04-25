import React, { useContext } from 'react';
import { FlatList, Text } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { FavoritesContext } from '../context/FavoritesContext';
import { useRouter } from 'expo-router';
export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const router = useRouter();
  if (favorites.length === 0) return <Text style={{ padding: 16 }}>No favorites yet.</Text>;
  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.idMeal}
      renderItem={({ item }) => <RecipeCard title={item.strMeal} onPress={() => router.push(`/recipe/${item.idMeal}`)} />}
    />
  );
}