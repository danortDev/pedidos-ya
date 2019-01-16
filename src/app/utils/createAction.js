const createAction = (type) => (args) => {
  const error = args instanceof Error;

  return {
    type,
    payload: args,
    error
  };
};

export default createAction;
