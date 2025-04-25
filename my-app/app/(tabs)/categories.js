import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import { fetchCategories } from '../../api/mealsApi';
import { useRouter } from 'expo-router';

export default function Categories() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchCategories().then(res => setCats(res.data.categories)).finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={cats}
      keyExtractor={i => i.idCategory}
      renderItem={({ item }) => (
        <CategoryCard
          title={item.strCategory}
          image={item.strCategoryThumb}
          onPress={() => router.push(`/all-recipes/${item.strCategory}`)}
        />
      )}
    />
  );
}