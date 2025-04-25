import { Tabs } from 'expo-router';

// Include only your desired tabs:
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Categories' }} />
      <Tabs.Screen name="all-recipes/index" options={{ title: 'All Recipes' }} />
      <Tabs.Screen name="favorites" options={{ title: 'Favorites' }} />
      <Tabs.Screen name="search" options={{ title: 'Search' }} />
    </Tabs>
  );
};
