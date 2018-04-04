'use strict';

// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello: function(){
//       return 'hello';
//     },
//   };
// }

// let monkey ={};

// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';

//   return obj;
// }

// console.log(updateObject(monkey));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

let objTest = {
  foo: 'foo',
  bar: 'bar',
};

function keyDeleter(obj){
  delete obj.foo;
  delete obj.bar;

  return obj;
}

// console.log(keyDeleter(objTest));

function makeStudentsReport(data) {
  return data.map(student => `${student.name}: ${student.grade}`); 
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

// console.log(makeStudentsReport(testData));