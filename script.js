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

    write a function that when given a url as a string parses out the domain name and returns it as a string. 

*//////////////////////////////////////////////////////////////////////////////////////////

                // function domainName (str) {
                //     return str.replace('https://','').replace('https://',"").replace('www.','').split('.')[0]
                // }


                // console.log(domainName('https://github.com/carbonfive'))
                // console.log(domainName('https://www.zombie-bites.com'))
                // console.log(domainName('https://www.cnet.com'))



/*///////////////////////////////////////////////////////////////////////////////////

    creates a unique string using set

*//////////////////////////////////////////////////////////////////////////////////////////



        const longestPossible = (str1,str2) => [...new Set(str1+str2)].sort().join('')

        console.log(longestPossible('xyaabbbccccdefww','xxxxyyyyabklmnopq'))




/*///////////////////////////////////////////////////////////////////////////////////

    sort first names and last name by alphabetical order

*//////////////////////////////////////////////////////////////////////////////////////////


function sortNames (str) {
    let newStr = str.toUpperCase().split(';').map( n => n.split(':').reverse().join(', '))
    .sort()
    .join(')(')
    return '(' + newStr + ')'
}


console.log(sortNames('Fred;Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'))

/*///////////////////////////////////////////////////////////////////////////////////

    Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak'); 

*//////////////////////////////////////////////////////////////////////////////////////////

function high(x) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const word = word => word.split('').reduce((a,c) => a + alphabet.indexOf((c),0))
    let highestWord =''
    let highestCount = 0
    x.split('').forEach(w => {
        const scoreCheck = score(w)
        if(scoreCheck > highestCount) {
            highestWord = w
            highestCount = scoreCheck
        }
    })
    return highestWord
}
console.log(high('man i need a taxi up to ubud'),'taxi')


