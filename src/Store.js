import { createStore } from 'redux';
import noteReducer from './ducks/notes';

const store = createStore(noteReducer);

export default store;
