const numbers = [1, 2, 3, 4];

const defaultMap = numbers.map((item, index) => {
  return item + index;
});

console.log("defaultMap: ", defaultMap);

Array.prototype.customMap = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i, this));
  }
  return arr;
};

const customMap = numbers.customMap((item, index) => {
  return item + index;
});

console.log("customMap: ", customMap);
