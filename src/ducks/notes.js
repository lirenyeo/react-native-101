// actions
const ADD_NOTE = 'ADD_NOTE';

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

    default:
      return state;
  }
}

// Action Creators
export function addNote(note) {
  return { type: ADD_NOTE, note };
}
