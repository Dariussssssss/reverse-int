module.exports = function reverse(n) {
  const str = String(n);
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }
  result = parseInt(result, 10);
  return result;
};
