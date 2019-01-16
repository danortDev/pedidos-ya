const objectToQueryString = (params = {}) => {
  const query = Object.keys(params).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
  }).join('&');
  return !!query ? `?${query}` : '';
};

export default objectToQueryString;
