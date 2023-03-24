/*
345. Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

function reverseVowels(s) {
  // Convert the string to an array of characters
  let arr = s.split("");

  // Define two pointers to swap vowels
  let left = 0;
  let right = s.length - 1;
  console.log(s.length);

  // Define a helper function to check if a character is a vowel
  function isVowel(c) {
    c = c.toLowerCase();
    return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
  }

  /*
Here, the function first converts the input character c to lowercase using the .toLowerCase() method. This is because we want to match both lowercase and uppercase vowels.

Then, the function checks whether the lowercase version of c is equal to any of the vowels using the logical OR operator ||. If the character is a vowel, the function returns true; otherwise, it returns false.
*/

  // Swap vowels between left and right pointers
  while (left < right) {
    if (isVowel(arr[left]) && isVowel(arr[right])) {
      // Swap vowels
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (isVowel(arr[left])) {
      right--;
    } else {
      left++;
    }
  }

  // Convert the array back to a string and return it
  return arr.join("");

  /*
arr.join("") is a JavaScript method that returns a new string by concatenating all the elements in an array arr, separated by a specified separator. In this case, the separator is an empty string "", which means that the elements in the array will be concatenated without any separator.
  */
}
const s = "leetcode";
console.log(reverseVowels(s));
