'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  },
};

// console.log(loaf.hydration());

// Iterate over an objects properties
const obj = {
  foo: 1,
  bar: 'two',
  fum: true,
  quux: 'four',
  spam: 5,
};

// for (let key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

let meals = ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'];

// console.log(meals[3]);


// Properties that aren't there
const objArr = [
  {
    name: 'Cam',
    jobTitle: 'Coder',
  },
  {
    name: 'Darren',
    jobTitle: 'Developer',
    boss: 'Cam',
  },
  {
    name: 'Frank',
    jobTitle: 'Programmer',
    boss: 'Cam',
  },
  {
    name: 'Martha',
    jobTitle: 'FrontEnd Dev',
    boss: 'Cam',
  },
  {
    name: 'Bob',
    jobTitle: 'Developer',
    boss: 'Cam',
  }
];
/*
for (let person of objArr) {
  if (person.hasOwnProperty('boss')){
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
  } else {
    console.log(`${person.jobTitle} ${person.name} reports to NOONE!`);
  }
}
*/

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

const input = 'craft block argon meter bells brown croon droop';

const decode = str => {
  let words = str.split(' ');
  let decodedWord = '';

  // Log cipher key:value pairs
  // for (let key in cipher) {
  //   console.log(`${key}: ${cipher[key]}`);
  // }

  //Log first letter of each words[i]
  for(let i = 0; i < words.length; i++) {
    // console.log(words[i][0]);
    // if cipher hasOwnProperty of the first letter of words[i]

    // First loop through, the hasOwnProperty should be 'c'
    // Which should += the [3] index of the words[i] to decodedWord
    if (cipher.hasOwnProperty(words[i][0])) {
      decodedWord += words[i]
    }
  }
  return decodedWord;
};

console.log(decode(input));

// const decodedWords = str => decode(str);
// console.log(decodedWords(input));