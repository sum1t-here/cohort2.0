/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 !== len2) return false;

  const newStr1 = str1.toLowerCase().split('');
  const newStr2 = str2.toLowerCase().split('');

  for (let i = 0; i < len1; i++) if (newStr1[i] !== newStr2[i]) return false;

  return true;
}

module.exports = isAnagram;
