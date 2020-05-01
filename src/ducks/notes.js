// actions
const ADD_NOTE = 'ADD_NOTE';
const PURGE = 'PURGE';

const initialState = [];

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_NOTE:
      const { title, text, icon } = action.note;
      return [
        ...state,
        {
          id: Date.now(),
          title,
          text,
          icon,
        },
      ];

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

// Action Creators
export function addNote(note) {
  return { type: ADD_NOTE, note };
}

export function clearNotes() {
  return { type: PURGE };
}
