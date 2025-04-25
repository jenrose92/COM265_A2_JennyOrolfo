import axios from 'axios';
const BASE = 'https://www.themealdb.com/api/json/v1/1';
export const fetchCategories = () => axios.get(`${BASE}/categories.php`);
export const fetchByCategory = category => axios.get(`${BASE}/filter.php?c=${encodeURIComponent(category)}`);
export const fetchRecipeById = id => axios.get(`${BASE}/lookup.php?i=${id}`);
export const fetchByName = name => axios.get(`${BASE}/search.php?s=${encodeURIComponent(name)}`);


import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('favorites').then(saved => saved && setFavorites(JSON.parse(saved)));
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
};