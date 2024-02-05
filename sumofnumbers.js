const testNums = [1, 2, 3, 4];
function sumFor(nums) {
  let val = 0;
  for (const i of nums) {
    val += i;
  }
  return val;
}
function sumWhile(nums) {
  let val = 0;
  let i = 0;
  while (i !== nums.length) {
    val += nums[i];
    i++;
  }
  return val;
}
function sumUnderscore(nums) {
  return _.reduce(nums, function (one, two) { return one + two; });
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return (nums[0] + sumRecursion(nums.slice(1, nums.length)));
}

console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumUnderscore(testNums));
console.log(sumRecursion(testNums));
