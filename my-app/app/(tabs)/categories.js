import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import { fetchCategories } from '../../api/mealsApi';
import { useRouter } from 'expo-router';

export default function Categories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchCategories()
      .then(res => setData(res.data.categories))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.idCategory}
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
