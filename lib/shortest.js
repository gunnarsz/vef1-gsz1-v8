import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Finds the shortest word in a string.
 * @param {string} str 
 * @returns {string|null}
 */
export function shortest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = splitOnWhitespace(str);
  let shortestWord = words[0];
  
  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
