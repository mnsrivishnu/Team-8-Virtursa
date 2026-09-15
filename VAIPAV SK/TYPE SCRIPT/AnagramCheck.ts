function checkAnagram(str1: string, str2: string): boolean {
    const normalize = (str: string) =>
        str.toLowerCase().replace(/\s/g, "").split("").sort().join("");

    return normalize(str1) === normalize(str2);
}

const firstString = prompt("Enter the first string:");
const secondString = prompt("Enter the second string:");

if (firstString !== null && secondString !== null) {
    const areAnagrams = checkAnagram(firstString, secondString);
    console.log(areAnagrams ? "The strings are anagrams." : "The strings are not anagrams.");
}