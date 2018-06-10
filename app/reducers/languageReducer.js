const initialState = {
  type: 'ENGLISH',
};

export default function requestReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_LANGUAGE': {
      return {
        ...state,
        type: action.language
      }
    }
    default: return state;
  }
}
