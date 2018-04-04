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

  for(let i = 0; i < words.length; i++) {
    if (cipher.hasOwnProperty(words[i][0])) {
      decodedWord += words[i][cipher[words[i][0]]-1];
    } else {
      decodedWord += ' ';
    }    
  }
  return decodedWord;
};

// console.log(decode(input));
