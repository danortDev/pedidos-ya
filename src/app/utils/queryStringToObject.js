const queryStringToObject = (search) => {
  const hashes = search.slice(search.indexOf('?') + 1).split('&')
  return hashes.reduce((result, hash) => {
    let [key, val] = hash.split('=');
    return { ...result, [key]: decodeURIComponent(val) };
  }, {});
};

export default queryStringToObject;
