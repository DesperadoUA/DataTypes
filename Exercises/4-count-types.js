'use strict';
function countTypesInArray(arr) {
  const obj = {};
  for (const i of arr) {
    const a = typeof i;
    obj[a] !== undefined ? ++obj[a] : obj[a] = 1;
  }
  return obj;
}
module.exports = { countTypesInArray };
