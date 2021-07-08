/*

    create a function that is a palindrome checker
        test = racecar,bob,rocket


*/
const palindromeChecker = (str) => str === str.split('').reverse().join('')

console.log(palindromeChecker('racecar'),true)
console.log(palindromeChecker('bob'),true)
console.log(palindromeChecker('rocket'),false)
