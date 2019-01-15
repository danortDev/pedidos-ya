const parseName = (name) =>
  name.substr(name.lastIndexOf('/') + 1, name.length - 5);

const getReducers = () => {
  const reducersContext = require.context('app/reducers/', true, /^\.\/[^/]+\.js$/);
  const reducers = {};

  reducersContext.keys().forEach(x => {
    reducers[parseName(x)] = reducersContext(x).default;
  });

  return reducers;
};

export default getReducers;
