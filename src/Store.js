import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import noteReducer from './ducks/notes';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  notes: noteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
