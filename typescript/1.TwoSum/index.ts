function twoSum(nums: number[], target: number): number[] {
    for (let cursorOne = 0; cursorOne < nums.length; cursorOne++) {
        for (let cursorTwo = cursorOne + 1; cursorTwo < nums.length; cursorTwo++) {
            if ((nums[cursorOne] + nums[cursorTwo]) == target)
                return [cursorOne, cursorTwo];
        }
    }

    return [];
}