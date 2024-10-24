import { isString } from './helpers.js';
import { reverse } from './reverse.js';

/**
 * Checks if a string is a palindrome.
 * @param {string} str 
 * @returns {boolean} 
 */
export function palindrome(str) {
  if (!isString(str) || str === '') { 
    return false;
  }

  const cleanedStr = str.toLowerCase().replace(/\s+/g, ''); 
  const reversedStr = reverse(cleanedStr);

  return cleanedStr === reversedStr; 
}
