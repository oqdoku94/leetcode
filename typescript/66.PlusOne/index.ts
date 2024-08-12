function plusOne(digits: number[]): number[] {
    if (digits.length < 1)
        return [1];

    let result = [...digits];

    if (digits[digits.length - 1] == 9)
        result = [...plusOne(digits.slice(0, digits.length - 1)), 0];
    else
        result[result.length - 1]++;

    return result;
}