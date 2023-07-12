function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }

  const original = [];
  const count = new Map();

  for (let num of changed) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  changed.sort((a, b) => a - b);

  for (let num of changed) {
    if (count.get(num) === 0) {
      continue;
    }

    const doubled = num * 2;

    if (count.get(doubled) === undefined || count.get(doubled) === 0) {
      return [];
    }

    original.push(num);
    count.set(num, count.get(num) - 1);
    count.set(doubled, count.get(doubled) - 1);
  }

  return original;
}

const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result);