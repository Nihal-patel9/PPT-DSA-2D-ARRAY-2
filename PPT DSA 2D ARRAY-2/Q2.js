function countCompleteRows(n) {
  let count = 0;
  let row = 1;

  while (n >= row) {
    n -= row;
    row++;
    count++;
  }

  return count;
}

const n = 5;
const result = countCompleteRows(n);
console.log(result);