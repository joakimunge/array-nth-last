# array-nth-last

Tiny function to get _nth_ last entry from array

## Install

```
$ yarn add array-nth-last
```

or

```
$ npm install array-nth-last --save
```

## Usage

```javascript
const last = require('array-nth-last');

const arr = [1, 2, 3, 4, 5];

last(arr); // => 5
last(arr, 3); // => 2
```

## API

---

### last(array, n?)

Returns the _nth_ last entry from the array

#### array

Type: `Array`

The array from which to get the _nth_ entry

#### n? _optional_

Type: `number`

The desired entry of the array to return
