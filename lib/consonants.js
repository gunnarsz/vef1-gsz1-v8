import { isString } from './helpers.js';

const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/**
 * Counts the number of consonants in a string.
 * @param {string} str 
 * @returns {number} 
 */

export function consonants(str) {
  if (!isString(str)) {
    return 0;
  }

  const lowerStr = str.toLowerCase(); 
  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (CONSONANTS.includes(lowerStr[i])) {
      count++;
    }
  }
  return count;
}
