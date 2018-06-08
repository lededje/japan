const initialState = {};

const urlReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_URL': return {
      ...action.url,
    };
    default: return state;
  }
};

export default urlReducer;
