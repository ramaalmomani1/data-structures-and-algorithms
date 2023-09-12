"use strict";
function hashmapLeftJoin(hashMap1, hashMap2) {
  let output = [];
  hashMap1.map.forEach((element) => {
    Object.keys(element.head.value).forEach((key) => {
      output.push([key, hashMap1.get(key), hashMap2.get(key)]);
    });
  });
  return output;
}

module.exports = hashmapLeftJoin;
