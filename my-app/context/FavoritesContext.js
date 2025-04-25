import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const FavoritesContext = createContext();
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('favorites').then(data => data && setFavorites(JSON.parse(data)));
  }, []);
  useEffect(() => {
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  const addFavorite = recipe => setFavorites(prev => [...prev, recipe]);
  const removeFavorite = id => setFavorites(prev => prev.filter(r => r.idMeal !== id));
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}