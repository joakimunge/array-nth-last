function nthLast(array, n = 0) {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }
  return array[array.length - (1 + n)];
}

module.exports = nthLast;
