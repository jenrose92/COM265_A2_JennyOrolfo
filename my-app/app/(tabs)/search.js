import React, { useState } from 'react';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import { fetchByName } from '../../api/mealsApi';
import { useRouter, useSearchParams } from 'expo-router';
export default function Search() {
  const router = useRouter();
  const { q } = useSearchParams();
  const [query, setQuery] = useState(q || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const doSearch = () => {
    setLoading(true);
    fetchByName(query)
      .then(res => setResults(res.data.meals || []))
      .finally(() => setLoading(false));
    router.replace({ pathname: '/search', params: { q: query } });
  };
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 8 }}
        placeholder="Search recipes"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={doSearch}
      />
      {loading ? <ActivityIndicator style={{ marginTop: 16 }} /> : (
        <FlatList
          data={results}
          keyExtractor={item => item.idMeal}
          renderItem={({ item }) => <RecipeCard title={item.strMeal} onPress={() => router.push(`/recipe/${item.idMeal}`)} />}
        />
      )}
    </View>
  );
}