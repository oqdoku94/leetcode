let replaceNumber = new Map<string, number>();
replaceNumber.set('I', 1);
replaceNumber.set('V', 5);
replaceNumber.set('X', 10);
replaceNumber.set('L', 50);
replaceNumber.set('C', 100);
replaceNumber.set('D', 500);
replaceNumber.set('M', 1000);

let beforeList = new Map<string, string[]>();

beforeList.set('I', ['V', 'X']);
beforeList.set('X', ['L', 'C']);
beforeList.set('C', ['D', 'M']);

function romanToInt(s: string): number {
    let result = 0;
    let cursor = 0;
    while (cursor < s.length) {
        if (beforeList.has(s[cursor]) && cursor + 1 < s.length && beforeList.get(s[cursor])?.includes(s[cursor + 1])) {
            result += replaceNumber.get(s[cursor + 1]) - replaceNumber.get(s[cursor]);
            cursor += 2;
        } else {
            result += replaceNumber.get(s[cursor]);
            cursor++;
        }
    }
    return result;
}

