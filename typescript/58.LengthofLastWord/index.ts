function lengthOfLastWord(s: string): number {
    const trimmedString = s.trim();
    const words = trimmedString.split(' ');
    const last = words[words.length - 1];
    return last ? last.length : 0;
}