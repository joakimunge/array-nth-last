const test = require('ava');
const nthLast = require('.');

test('last', t => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lastEntry = nthLast(arr);
  t.is(lastEntry, 9);
});

test('3rd last', t => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lastEntry = nthLast(arr, 2);
  t.is(lastEntry, 7);
});

test('Invalid argument', t => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lastEntry = nthLast(arr, 'asf');
  t.is(lastEntry, undefined);
});
