function sortedSquares(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const square = nums[i] * nums[i];
    result.push(square);
  }

  result.sort((a, b) => a - b);

  return result;
}

const nums = [-4, -1, 0, 3, 10];
const result = sortedSquares(nums);
console.log(result);