import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../authSlice';
import searchReducer from './reducers'; // Đường dẫn đến reducer mới

// Combine tất cả các reducers
const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
});

// Cấu hình Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo Redux store với persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Tạo persistor
const persistor = persistStore(store);

export { store, persistor };
