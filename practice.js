/*............... problem- 1 .................... */


const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {   
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
const result = countVowel('PROGRAMMING HERO');
console.log(result);


/*............... problem- 2 .................... */


function checkPalindrome(string) {

    const input = string.length;
    for (let i = 0; i < input / 2; i++) {
        if (string[i] !== string[input - 1 - i]) {
            return 'false';
        }
    }
    return 'true';
}
const res = checkPalindrome("madam");

console.log(res);


/*............... problem- 3 .................... */


function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('It is a callback function');
}

greet('Peter', callMe);
