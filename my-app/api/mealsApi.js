import axios from 'axios';
const BASE = 'https://www.themealdb.com/api/json/v1/1';
export const fetchCategories = () => axios.get(`${BASE}/categories.php`);
export const fetchByCategory = category => axios.get(`${BASE}/filter.php?c=${encodeURIComponent(category)}`);
export const fetchRecipeById = id => axios.get(`${BASE}/lookup.php?i=${id}`);
export const fetchByName = name => axios.get(`${BASE}/search.php?s=${encodeURIComponent(name)}`);
