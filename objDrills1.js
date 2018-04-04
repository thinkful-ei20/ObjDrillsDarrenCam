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


console.log(keyDeleter(objTest));

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

const students = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

function enrollInSummerSchool(students) {
  // for(let i = 0l i < students.length; i++) {
  //   if(students[i].status !== 'In Summer School') {
  //     students[i].status = 'In Summer School'
  //   }
  // }
  // return students;
  return students.map(students => {
    return {
      name: students.name,
      status: 'In Summer School',
      course: students.course,
    };
  });
}

console.log(enrollInSummerSchool(students));
