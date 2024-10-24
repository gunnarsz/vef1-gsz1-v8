import { isString } from './helpers.js';

/**
 * Reverses a string.
 * @param {string} str 
 * @returns {string|null} 
 */
export function reverse(str) {
  if (!isString(str)) {
    return null;
  }
  return str.split('').reverse().join('');
}
