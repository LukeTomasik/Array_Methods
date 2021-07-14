/*/////////////////////////////////////////////////////////////////////////

    create a function that is a palindrome checker
        test = racecar,bob,rocket


*/////////////////////////////////////////////////////////////////////////////////

const palindromeChecker = (str) => str === str.split('').reverse().join('')


console.log(palindromeChecker('racecar'),true)
console.log(palindromeChecker('bob'),true)
console.log(palindromeChecker('rocket'),false)

/*///////////////////////////////////////////////////////////////////////////////////

    Map method => .map( (element,index,arr) => {} )

*//////////////////////////////////////////////////////////////////////////////////////////

const arr = ['dog','cat', 'hippo']

const newArr = arr.map((e,i,a) => e )
console.log(newArr)



/*///////////////////////////////////////////////////////////////////////////////////

    filter method => .filter( (element,index,arr) => {} )

*//////////////////////////////////////////////////////////////////////////////////////////
    /*
    Given two arrays of strings, return the number of times each string of the second array appears in the first array.

    Example
    array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
    array2 = ['abc', 'cde', 'uap']

    Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
    Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
    Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);

    */
const arrayChecker = (arrOne,arrTwo) => {
  let arrLoop = arrTwo.map((el, i) => {
    
        filteredArray = arrOne.filter((li) => li === el )
        return filteredArray.length
})
console.log(`${arrLoop} this is the looped array`)
  return arrLoop
}

console.log(arrayChecker(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap'],[2, 1, 0]))
console.log(arrayChecker(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz'],[2, 1, 2]))
console.log(arrayChecker(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'], [2, 0, 1]))


function removeConsecDupes (str) {
    return str.split('').filter ((e,i,arr) => e != arr[i-1]).join(' ')
}

console.log(removeConsecDupes('alpha beta beta gamma gamma delta alpha beta beta gamma gamma delta'))







// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

/*///////////////////////////////////////////////////////////////////////////////////

    filter method => .filter( (element,index,arr) => {} )

*//////////////////////////////////////////////////////////////////////////////////////////