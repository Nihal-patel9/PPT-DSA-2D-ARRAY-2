function convertTo2DArray(original, m, n) {
  const totalElements = m * n;

  if (original.length !== totalElements) {
    return []; // Return empty 2D array if it is impossible
  }

  const result = [];
  let row = [];

  for (let i = 0; i < original.length; i++) {
    row.push(original[i]);

    if (row.length === n) {
      result.push(row);
      row = [];
    }
  }

  return result;
}

const original = [1, 2, 3, 4];
const m = 2;
const n = 2;

const result = convertTo2DArray(original, m, n);
console.log(result);