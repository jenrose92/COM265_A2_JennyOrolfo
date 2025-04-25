import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import RecipeCard from '../../../components/RecipeCard';
import { fetchByCategory } from '../../../api/mealsApi';
import { useSearchParams, useRouter } from 'expo-router';
export default function AllRecipes() {
  const { category } = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetchByCategory(category)
      .then(res => setData(res.data.meals))
      .finally(() => setLoading(false));
  }, [category]);
  if (loading) return <ActivityIndicator size="large" />;
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.idMeal}
      renderItem={({ item }) => (
        <RecipeCard title={item.strMeal} onPress={() => router.push(`/recipe/${item.idMeal}`)} />
      )}
    />
  );
}
