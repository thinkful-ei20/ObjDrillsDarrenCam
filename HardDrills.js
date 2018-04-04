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

console.log(meals[3]);


// Properties that aren't there
const objArr = [
  {
    name: 'Cam',
    jobTitle: 'Coder',
  },
  {
    name: 'Darren',
    jobTitle: 'Developer',
  },
  {
    name: 'Frank',
    jobTitle: 'Programmer',
  },
  {
    name: 'Martha',
    jobTitle: 'FrontEnd Dev',
  },
  {
    name: 'Bob',
    jobTitle: 'Developer',
  }
];

for (let person of objArr) {
  console.log(`${person.name}: ${person.jobTitle}`);
}