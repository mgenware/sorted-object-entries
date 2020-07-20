import * as assert from 'assert';
import sortedObjEntries from '..';

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

it('Asc', () => {
  assert.deepEqual(sortedObjEntries(obj), [
    ['ao', 7],
    ['bo', 9],
    ['li', 4],
    ['liu', 1],
    ['qian', 6],
    ['wu', 3],
    ['xue', 8],
    ['zhang', 2],
    ['zhao', 5],
  ]);
});

it('Desc', () => {
  assert.deepEqual(sortedObjEntries(obj, { desc: true }), [
    ['zhao', 5],
    ['zhang', 2],
    ['xue', 8],
    ['wu', 3],
    ['qian', 6],
    ['liu', 1],
    ['li', 4],
    ['bo', 9],
    ['ao', 7],
  ]);
});
