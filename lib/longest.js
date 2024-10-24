import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Finds the longest word in a string.
 * @param {string} str The string to analyze.
 * @returns {string|null} The longest word or null if input is invalid.
 */
export function longest(str) {
  if (!isString(str)) {
    return null;
  }
  
  const words = splitOnWhitespace(str);
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
