// actions
const ADD_NOTE = 'ADD_NOTE';

const initialState = [
  {
    id: 1111,
    title: 'Hello React Native',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt suscipit est harum incidunt illo delectus quibusdam dolor! Quam, enim voluptatem.',
    icon: 'av-timer',
  },
  {
    id: 2222,
    title: 'Covid19 MCO',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.',
    icon: 'flight-takeoff',
  },
];

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
