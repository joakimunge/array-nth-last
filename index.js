function nthLast(array, n = 0) {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }

  return n === 0 ? array[array.length - (1 + n)] : array[array.length - n];
}

module.exports = nthLast;
