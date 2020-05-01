import { createStore, combineReducers } from 'redux';
import noteReducer from './ducks/notes';

const rootReducer = combineReducers({
  notes: noteReducer,
});

let store = createStore(rootReducer);

export { store };
