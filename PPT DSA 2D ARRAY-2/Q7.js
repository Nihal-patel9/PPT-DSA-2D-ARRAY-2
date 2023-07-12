function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // Minimum element is in the right half
      left = mid + 1;
    } else {
      // Minimum element is in the left half or at mid
      right = mid;
    }
  }

  return nums[left];
}

const nums = [3, 4, 5, 1, 2];
const result = findMin(nums);
console.log(result);