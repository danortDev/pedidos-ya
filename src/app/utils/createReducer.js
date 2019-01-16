const createReducer = (initialState, actionHandlers) => {
  return (state = initialState, action) => {
    const reduceFn = actionHandlers[action.type];
    return reduceFn ? { ...state, ...reduceFn(state, action) } : state;
  };
};

export default createReducer;
