# sorted-object-entries

[![Build Status](https://github.com/mgenware/sorted-object-entries/workflows/Build/badge.svg)](https://github.com/mgenware/sorted-object-entries/actions)
[![npm version](https://img.shields.io/npm/v/sorted-object-entries.svg?style=flat-square)](https://npmjs.com/package/sorted-object-entries)
[![Node.js Version](http://img.shields.io/node/v/sorted-object-entries.svg?style=flat-square)](https://nodejs.org/en/)

Sorted `Object.entries` in ascending or descending order.

## Installation

```sh
yarn add sorted-object-entries
```

## Usage

```ts
import sortedObjEntries from 'sorted-object-entries';

const obj = {
  liu: 1,
  zhang: 2,
  wu: 3,
  li: 4,
  zhao: 5,
  qian: 6,
  ao: 7,
  xue: 8,
  bo: 9,
};

sortedObjEntries(obj);
/* [
    ['ao', 7],
    ['bo', 9],
    ['li', 4],
    ['liu', 1],
    ['qian', 6],
    ['wu', 3],
    ['xue', 8],
    ['zhang', 2],
    ['zhao', 5],
  ]
*/

sortedObjEntries(obj, { desc: true });
/* [
    ['zhao', 5],
    ['zhang', 2],
    ['xue', 8],
    ['wu', 3],
    ['qian', 6],
    ['liu', 1],
    ['li', 4],
    ['bo', 9],
    ['ao', 7],
  ]
*/
```
