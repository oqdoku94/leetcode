function removeDuplicates(nums: number[]): number {
    let cursor = 0;
    while(cursor < nums.length - 1) {
        if (nums[cursor] != nums[cursor + 1]) {
            cursor++;
            continue;
        }

        nums.splice(cursor + 1, 1);
    }

    return nums.length;
}