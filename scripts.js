/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

// Fyrirlestur vika 10
console.log('halló'); 


/**
 * @param {Element} el 
 */
function removeHidden(el) {
    el.classList.remove('hidden');
}

const outputElement = document.querySelector('.output');

if (outputElement) {   
    removeHidden(outputElement); 
}

const longestElement = document.querySelector('.longest');
if (longestElement) {
    longestElement.textContent = 'heimur!'; 
}

// Fyrirlestur vika 9
import { isString, splitOnWhitespace } from './lib/helpers.js'; 
import { longest } from './lib/longest.js'; 
import { shortest } from './lib/shortest.js'; 
import { reverse } from './lib/reverse.js';
import { palindrome } from './lib/palindrome.js';
import { vowels } from './lib/vowels.js'; 
import { consonants } from './lib/consonants.js';

const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

const textareaElement = document.querySelector('textarea');
const formElement = document.querySelector('form');

function submitHandler(event) {
    event.preventDefault();
    const inputText = textareaElement.value; 

    console.log('textareaElement inniheldur', inputText);

    if (!isString(inputText)) {
        console.error('Input is not a valid string');
        return;
    }

    document.querySelector('.input').textContent = inputText;

    const longestWord = longest(inputText);
    const shortestWord = shortest(inputText);
    const reversedText = reverse(inputText);
    const isPalindrome = palindrome(inputText);
    const vowelCount = vowels(inputText);
    const consonantCount = consonants(inputText);

    document.querySelector('.longest').textContent = longestWord || 'N/A'; 
    document.querySelector('.shortest').textContent = shortestWord || 'N/A'; 
    document.querySelector('.reversed').textContent = reversedText || 'N/A'; 
    document.querySelector('.palindrome').textContent = isPalindrome ? 'Yes' : 'No'; 
    document.querySelector('.vowels').textContent = vowelCount; 
    document.querySelector('.consonants').textContent = consonantCount; 

    const outputElement = document.querySelector('.output');
    if (outputElement) {
        removeHidden(outputElement);
    }
}

formElement.addEventListener('submit', submitHandler);
