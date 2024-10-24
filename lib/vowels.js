import { isString } from './helpers.js';

/**
 * Counts the number of vowels in a string.
 * @param {string} str 
 * @returns {number} 
 */
export function vowels(str) {
  if (!isString(str)) {
    return 0;
  }

  const vowelMatches = str.match(/[aeiouáéýúíóöæ]/gi); 
  return vowelMatches ? vowelMatches.length : 0;
}
