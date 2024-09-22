import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // используем localStorage по умолчанию, но можем и другие хранилища
import favoriteMoviesReducer from '../features/movies/favoriteMoviesSlice';

// Конфигурация persist
const persistConfig = {
  key: 'root',
  storage,
};

// Обёртываем редьюсер с persist
const persistedReducer = persistReducer(
  persistConfig,
  favoriteMoviesReducer
);

// Создание store
const store = configureStore({
  reducer: {
    favoriteMovies: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключение проверки сериализуемости
    }),
});

// Создание persistor для контроля состояния persist
export const persistor = persistStore(store);
export default store;
