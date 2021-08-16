/*/////////////////////////////////////////////////////////////////////////

    create a function that is a palindrome checker
        test = racecar,bob,rocket


*/ ////////////////////////////////////////////////////////////////////////////////

// const palindromeChecker = (str) => str === str.split('').reverse().join('')

// console.log(palindromeChecker('racecar'),true)
// console.log(palindromeChecker('bob'),true)
// console.log(palindromeChecker('rocket'),false)

/*///////////////////////////////////////////////////////////////////////////////////

    Map method => .map( (element,index,arr) => {} )

*/ /////////////////////////////////////////////////////////////////////////////////////////

// const arr = ['dog','cat', 'hippo']

// const newArr = arr.map((e,i,a) => e )
// console.log(newArr)

/*///////////////////////////////////////////////////////////////////////////////////

    filter method => .filter( (element,index,arr) => {} )

*/ /////////////////////////////////////////////////////////////////////////////////////////
/*
    Given two arrays of strings, return the number of times each string of the second array appears in the first array.

    Example
    array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
    array2 = ['abc', 'cde', 'uap']

    Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
    Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
    Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);

    */
// const arrayChecker = (arrOne,arrTwo) => {
// let arrLoop = arrTwo.map((el, i) => {

//         filteredArray = arrOne.filter((li) => li === el )
//         return filteredArray.length
// })
// console.log(`${arrLoop} this is the looped array`)
// return arrLoop
// }

// console.log(arrayChecker(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap'],[2, 1, 0]))
// console.log(arrayChecker(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz'],[2, 1, 2]))
// console.log(arrayChecker(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'], [2, 0, 1]))

// function removeConsecDupes (str) {
//     return str.split('').filter ((e,i,arr) => e != arr[i-1]).join(' ')
// }

// console.log(removeConsecDupes('alpha beta beta gamma gamma delta alpha beta beta gamma gamma delta'))

// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

/*///////////////////////////////////////////////////////////////////////////////////

    write a function that when given a url as a string parses out the domain name and returns it as a string. 

*/ /////////////////////////////////////////////////////////////////////////////////////////

// function domainName (str) {
//     return str.replace('https://','').replace('https://',"").replace('www.','').split('.')[0]
// }

// console.log(domainName('https://github.com/carbonfive'))
// console.log(domainName('https://www.zombie-bites.com'))
// console.log(domainName('https://www.cnet.com'))

/*///////////////////////////////////////////////////////////////////////////////////

    creates a unique string using set

*/ /////////////////////////////////////////////////////////////////////////////////////////

// const longestPossible = (str1,str2) => [...new Set(str1+str2)].sort().join('')

// console.log(longestPossible('xyaabbbccccdefww','xxxxyyyyabklmnopq'))

/*///////////////////////////////////////////////////////////////////////////////////

    sort first names and last name by alphabetical order

*/ /////////////////////////////////////////////////////////////////////////////////////////

// function sortNames (str) {
//     let newStr = str.toUpperCase().split(';').map( n => n.split(':').reverse().join(', '))
//     .sort()
//     .join(')(')
//     return '(' + newStr + ')'
// }

// console.log(sortNames('Fred;Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'))

/*///////////////////////////////////////////////////////////////////////////////////

    Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak'); 

*/ /////////////////////////////////////////////////////////////////////////////////////////

// function high(x) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     const word = word => word.split('').reduce((a,c) => a + alphabet.indexOf((c),0))
//     let highestWord =''
//     let highestCount = 0
//     x.split('').forEach(w => {
//         const scoreCheck = word(w)
//         if(scoreCheck > highestCount) {
//             highestWord = w
//             highestCount = scoreCheck
//         }
//     })
//     return highestWord
// }
// console.log(high('man i need a taxi up to ubud'),'taxi')

// let arr = []
// const test = (drink) => {

//     if(arr.length === 0) {
//         arr.push(drink)
//     } else if (arr.length >= 1) {
//         arr.map(el => {
//             drink === el ? console.log('drink exists') : arr.push(drink)
//         })
//     }

// }
// test('drink')
// test('tequila')
// test('vodka')
// test('whisk')
// // arr = []
// console.log(arr)

/*

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);

*/

// const sortNums = (arr) => {
//     const oddNums = arr.filter(x => x % 2).sort((a,b) => a-b)
//     return arr.map(n => n% 2 ? oddNums.shift() : n)
// }
/*
The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

Test.assertEquals(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

*/

// function findDeleteNum(arr,mixWDel) {
//     return arr.filter(v => mixWDel.indexOf(v) === -1) [0] || 0
// }

/*

Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"


*/

// function missingVal(str) {
//    return [...'aeiou'].findIndex(letter => !String.includes(letter))
// }

/*


*/

// function avgRep(arr) {
//     const avg = Math.round(arr.join('').length / arr.length)
//     return arr.map(e => e[0].repeat(avg))

// }

// console.log(avgRep(['aa','bbb','cccc']))

// var removeDuplicates = function(nums) {
//     const newArr = []
//     for (let key of nums) {
//         !newArr.includes(key) ? newArr.push(key) : ''
//     }

//     return newArr
// };

// console.log(removeDuplicates([1,1,2]))

// Given a string of characters, return the character that appears the most often.

// function mostOften(str) {
//     const characters = {}
//     for (let char of str) {
//         characters[char] = characters[char] +1 || 1
//     }
//     let mostCount = 0
//     let mostCharacter = null

//     for (let char in characters ){
//         if(characters[char] > mostCount) {
//             mostCount = characters[char]
//             mostCharacter = char
//         }
//     }
//     return mostCharacter
// }

// Given a string of word or phrases, count the number of vowels

// no regex,

// function countVowels(str) {
//     let count =0
//     const vowels = 'aeiou'
//     for (let char of str.toLowerCase()) {
//         if ( vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
//     }

//   function findAllHobbyists(hobby, hobbies) {
//     const arr = []
//     for (let name in hobbies) {
//        for (let i =0; i <hobbies[name].length; i++) {

//             hobbies[name][i].includes(hobby) ? arr.push(name) : " null"

//             // console.log(hobbies[name][i])
//        }
//     // console.log(hobbies[name])

//     }
//         console.log(arr)
//     //return ;
//   }

//   var hobbies = {
//     "Steve": ['Fashion', 'Piano', 'Reading'],
//     "Patty": ['Drama', 'Magic', 'Pets'],
//     "Chad": ['Puzzles', 'Pets', 'Yoga']
//   };

//   console.log(findAllHobbyists('Yoga', hobbies));

// class Snapshot {
//     constructor(obj) {
//       this.obj = obj;
//       this.objCopy = {...obj};
//       this.getObj = function() { return obj };
//       this.restore = this.restore.bind(this);
//     }
//     console.log()
//     restore() {
//       return this.obj;
//     }

//   }

//   let obj = {
//     a: 1,
//     b: 2
//   };

//   let snap = new Snapshot(obj);
//   console.log()

//   obj.a = 3
//   console.log(obj===snap.obj); //It should log false
//   console.log(JSON.stringify(obj), [3,2]); //It should log { a: 3, b: 2 }
//   console.log(JSON.stringify(snap.obj) , [1,2]); //It should log { a: 1, b: 2 }
//   obj = snap.restore();
//   console.log(obj===snap.obj, false); //It should log false
//   console.log(JSON.stringify(obj), [1,2]); //It should log { a: 1, b: 2 }

//   SELECT    d.name, COALESCE(cnt, 0)
//   FROM      directors d
//   LEFT JOIN (SELECT   directorId, COUNT(*) AS cnt
//        FROM     movies
//        GROUP BY directorId) m ON d.id = m.directorId

var sampleData = [
  {
    product: "milk",
    desc: "2%",
    size: "gallon",
    city: "Cleveland",
    state: "OH",
    price: 2.9,
  },
  {
    product: "milk",
    desc: "1%",
    size: "gallon",
    city: "Cleveland",
    state: "OH",
    price: 2.9,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "Cleveland",
    state: "OH",
    price: 2.9,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "Columbus",
    state: "OH",
    price: 3.12,
  },
  {
    product: "milk",
    desc: "2%",
    size: "gallon",
    city: "Columbus",
    state: "OH",
    price: 3.1,
  },
  {
    product: "milk",
    desc: "1%",
    size: "gallon",
    city: "Columbus",
    state: "OH",
    price: 3.08,
  },
  {
    product: "milk",
    desc: "2%",
    size: "gallon",
    city: "Toledo",
    state: "OH",
    price: 2.85,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "Toledo",
    state: "OH",
    price: 2.85,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "Toledo",
    state: "OH",
    price: 2.85,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "Chicago",
    state: "IL",
    price: 3.94,
  },
  {
    product: "milk",
    desc: "1%",
    size: "gallon",
    city: "Chicago",
    state: "IL",
    price: 3.97,
  },
  {
    product: "milk",
    desc: "2%",
    size: "gallon",
    city: "Chicago",
    state: "IL",
    price: 3.99,
  },
  {
    product: "milk",
    desc: "2%",
    size: "gallon",
    city: "Miami",
    state: "FL",
    price: 3.33,
  },
  {
    product: "milk",
    desc: "1%",
    size: "gallon",
    city: "Miami",
    state: "FL",
    price: 3.33,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "Miami",
    state: "FL",
    price: 3.33,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "San Diego",
    state: "CA",
    price: 3.53,
  },
  {
    product: "milk",
    desc: "2%",
    size: "gallon",
    city: "Columbus",
    state: "GA",
    price: 2.9,
  },
  {
    product: "milk",
    desc: "1%",
    size: "gallon",
    city: "Springfield",
    state: "IL",
    price: 3.01,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "Springfield",
    state: "IL",
    price: 3.01,
  },
  {
    product: "milk",
    desc: "skim",
    size: "gallon",
    city: "Springfield",
    state: "IL",
    price: 3.01,
  },
];

var avgPriceGallonMilk = function (data) {
  let avg = [];
  for (let entry of data) {
    avg.push(entry["price"]);
  }

  let ans = avg.reduce((a, b) => a + b) / avg.length;
  console.log(Math.floor(ans), 'nearest');
  console.log(Math.round(ans * 100) / 100);
};

var avgPriceGallonMilkOhio = function (data) {
  let avg = [];
  for (let entry of data) {
    entry["state"] === "OH" ? avg.push(entry["price"]) : "";
    avg.push(entry["price"]);
  }
  let ans = avg.reduce((a, b) => a + b) / avg.length;
  console.log(ans)
  console.log(Math.round(ans * 100) / 100);
};

var avgPriceGallonMilkColumbusOhio = function (data) {
  let avg = [];
  for (let entry of data) {
    entry["state"] === "OH" && entry["city"] === "Columbus"
      ? avg.push(entry["price"])
      : "";
    avg.push(entry["price"]);
  }
  let ans = avg.reduce((a, b) => a + b) / avg.length;
  console.log(ans)
  console.log(Math.round(ans * 100) / 100);
};

// var avgPriceGallonTwoPercMilk = function(data){
//     let avg = [];
//     for (let entry of data) {
//       entry["desc"] === "2%" 
//         ? avg.push(entry["price"])
//         : "";
//       avg.push(entry["price"]);
//     }
//     let ans = avg.reduce((a, b) => a + b) / avg.length;
//     console.log(Math.ceil((ans.toFixed(2))));
//   }
//   var stateWithHighestGallonMilkPrice = function(data){
//     let avgOne = [];
//     let avgTwo = [];
//     let avgThree = [];
//     let avgFour = [];
//     let avgFive = [];
//     for (let entry of data) {
//         if (entry['state'] === 'OH') {
//             avgOne.push(entry["price"])
//         } else if (entry['state'] === 'IL') {
//             avgTwo.push(entry["price"])
//         } else if (entry['state'] === 'FL') {
//             avgThree.push(entry["price"])
//         } else if (entry['state'] === 'GA') {
//             avgFour.push(entry["price"])
//         } else if (entry['state'] === 'CA') {
//             avgFive.push(entry["price"])
//         }
//     }
    
//     console.log(avgOne = avgOne.reduce((a,b)=> a+b) / avgOne.length)
//     console.log(avgTwo = avgTwo.reduce((a,b)=> a+b) / avgTwo.length)
//     console.log(avgThree = avgThree.reduce((a,b)=> a+b) / avgThree.length)
//     console.log(avgFour = avgFour.reduce((a,b)=> a+b) / avgFour.length)
//     console.log(avgFive = avgFive.reduce((a,b)=> a+b) / avgFive.length)
//     const avgArr = [avgOne,avgTwo,avgThree,avgFour,avgFive]
//     const highAvg = avgArr.sort((a,b) => a-b)
//     console.log(highAvg)
//     console.log(highAvg.pop())
//     // let ans = avg.reduce((a, b) => a + b) / avg.length;
//     // console.log(Math.ceil((ans.toFixed(2))));
//   }




avgPriceGallonMilk(sampleData);
avgPriceGallonMilkOhio(sampleData);
avgPriceGallonMilkColumbusOhio(sampleData)
// avgPriceGallonTwoPercMilk(sampleData)
// stateWithHighestGallonMilkPrice(sampleData)
