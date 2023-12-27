function findIndicesForSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const currentSum = nums[left] + nums[right];

        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // If no such indices are found
}

// Example usage:
const numbers = [1, 2, 4, 7, 11, 15];
const targetSum = 15;

const result = findIndicesForSum(numbers, targetSum);

if (result) {
    console.log(`Indices with values ${targetSum}: ${result}`);
} else {
    console.log("No such indices found.");
}